chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action == 'displayHappyPercentage') {
        $('#wordsChanged').html(message.wordCount);
        $('#happinessStats').html((message.wordCount)/(message.profanityCount));
    }
});