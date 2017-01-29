var wordCount = 0;
var profanityCount = 0;

var $set = $('p:not(:has(*)), b:not(:has(*)), a:not(:has(*)), span:not(:has(*))');
var len = $set.length;
$set.each(function(index){
    var el = $(this);
    var text = $(this).html();
    var words = text.split(/[ ,]+/).filter(Boolean);

    wordCount++;
    words.forEach(function(word){

        var positiveWord = profanityFilter.checkForProfanity(word);
        if (positiveWord) {
            el.html(function (i, text) {
                return text.replace(word, positiveWord);
            });
            profanityCount++;
        }
    });

    if (index == len - 1) {

        if (!$("#happy").length) {
            chrome.runtime.sendMessage({
                action: 'displayHappyPercentage',
                wordCount: wordCount,
                profanityCount: profanityCount
            });
            var happyPercentage = parseInt((profanityCount * 1.0 / wordCount) * 100);
            $('<div id="happy" style="position: fixed; border-radius:5px; background-color: rgba(0,0,0,0.5); color:white; bottom:20px; right:20px; width:200px; height:50px; text-align:center;"> <p style="font-family: Arial; margin-top:16px;">' + happyPercentage + '% MORE HAPPY :D </p></div>').appendTo(document.body);

        }
    }

});


