/**
 * Created by franc on 1/28/2017.
 */

var negativeAjdectives = [];
var profanities = [];
var positiveAdjectives = [];
var cuteWords = [];

var profanityFilter = {
    checkForProfanity: checkForProfanity,
    checkForNegativeAdjectives: checkForNegativeAdjectives,
    provideCuteWord: provideCuteWord,
    providePositiveAdjective: providePositiveAdjective
}

function checkForProfanity(word){
    profanities.forEach(function(profanity){
        if (word.toUpperCase() === profanity.toUpperCase()) return true;
    });
    return false;
}

function checkForNegativeAdjectives(word){
    negativeAjdectives.forEach(function(adjective){
        if (word.toUpperCase() === adjective.toUpperCase()) return true;
    });
    return false;
}

function provideCuteWord(){
    return cuteWords[Math.floor(Math.random()*cuteWords.length)];
}

function providePositiveAdjective(){
    return positiveAdjectives[Math.floor(Math.random()*positiveAdjectives.length)];
}