//semantria authentication
var API_KEY = "eb8c0988-bc2e-46d4-90d5-f1cff9ac0f29";
var API_SECRET = "5a9cf19e-e1c9-47cf-816f-6ec0664fb3bd";



$('p:not(:has(*))').each(function(i){
    var el = $(this);
    var text = $(this).html();
    var words = text.split(" ");

    words.forEach(function(word){

        if (profanityFilter.checkForProfanity(word)){
            var cuteWord = profanityFilter.provideCuteWord(word);
            el.html(cuteWord);
        }

        else if(profanityFilter.checkForNegativeAdjective(word)){
            var positiveAdjective = profanityFilter.providePositiveAdjective(word);
            el.html(positiveAdjective);
        }
    });
});

