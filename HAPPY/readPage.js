//semantria authentication
var API_KEY = "eb8c0988-bc2e-46d4-90d5-f1cff9ac0f29";
var API_SECRET = "5a9cf19e-e1c9-47cf-816f-6ec0664fb3bd";

var wordCount = 0;
var profanityCount = 0;

var $set = $('p:not(:has(*)), b:not(:has(*)), a:not(:has(*))');
var len = $set.length;
$set.each(function(index){
    var el = $(this);
    var text = $(this).html();
    var words = text.split(/[ ,]+/);

    wordCount++;
    words.forEach(function(word){

        if (profanityFilter.checkForProfanity(word)){
            profanityCount++;
            console.log("prof");
            var cuteWord = profanityFilter.provideCuteWord();
            el.html(function (i, text) {
                return text.replace(word,cuteWord);
            });

        }

        else if(profanityFilter.checkForNegativeAdjective(word)){
            profanityCount++;
            console.log("ajd");
            var positiveAdjective = profanityFilter.providePositiveAdjective();
            el.html(function (i, text) {
                return text.replace(word,positiveAdjective);
            });
        }

        else if(profanityFilter.checkForNegativeVocabulary(word)){
            profanityCount++;
            console.log("voc");
            var positiveVocabulary = profanityFilter.providePositiveVocabulary();
            el.html(function (i, text) {
                return text.replace(word,positiveVocabulary);
            });
        }
    });

    if (index == len - 1) {

        if (!$("#happy").length) {
            chrome.runtime.sendMessage({
                action: 'displayHappyPercentage',
                wordCount: wordCount,
                profanityCount: profanityCount
            });
            var happyPercentage = (profanityCount * 1.0 / wordCount) * 100;
            $('<div id="happy" style="position: fixed; border-radius:5px; background-color: rgba(0,0,0,0.5); color:white; bottom:20px; right:20px; width:200px; height:100px"> We have made this page happier by :' + happyPercentage + '% </div>').appendTo(document.body);

        }
    }

});


