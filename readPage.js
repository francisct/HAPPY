//semantria authentication
var API_KEY = "eb8c0988-bc2e-46d4-90d5-f1cff9ac0f29";
var API_SECRET = "5a9cf19e-e1c9-47cf-816f-6ec0664fb3bd";

var wordCount = 0;
var profanityCount = 0;

$('p:not(:has(*))').each(function(i){
    var el = $(this);
    var text = $(this).html();
    var words = text.split(" ");

    words.forEach(function(word){
        wordCount++;

        if (profanityFilter.checkForProfanity(word)){
            profanityCount++;
            var cuteWord = profanityFilter.provideCuteWord(word);
            el.html(cuteWord);
        }

        else if(profanityFilter.checkForNegativeAdjective(word)){
            profanityCount++
            var positiveAdjective = profanityFilter.providePositiveAdjective(word);
            el.html(positiveAdjective);
        }
    });
});

chrome.runtime.sendMessage({action: 'displayHappyPercentage', wordCount: wordCount, profanityCount: profanityCount});

$.get(chrome.extension.getURL('pageStatPopup.html'), function(data) {
    $($.parseHTML(data)).appendTo('body');
});

