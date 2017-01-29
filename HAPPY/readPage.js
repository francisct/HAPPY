var wordCount = 0;
var profanityCount = 0;

var $set = $('p:not(:has(*:not(br, span))), b:not(:has(*:not(br, span))), a:not(:has(*:not(br, span))), span:not(:has(*:not(br, span))), div:not(:has(*:not(br, span)))');
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
            var happyPercentage = parseInt((profanityCount * 1.0 / wordCount) * 100);
            $('#happy').html('<p style="margin-top: 12px;padding:0px;"><span id="happyPercentage" style="font: 16px Arial; display: inline;">'+happyPercentage+'% MORE HAPPY</span>  <img style="display: inline;width: 25px;margin-left: 5px;margin-bottom: 3px;" src="https://github.com/francisct/HAPPY/blob/master/HAPPY/icon-38.png?raw=true"></p>');

    }

});


