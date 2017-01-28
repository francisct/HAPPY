
chrome.tabs.onUpdated.addListener(function (tabId, info) {

    chrome.tabs.executeScript(null, {
        file : 'thirdParty/jquery-2.2.3.min.js'
    }, function () {
        chrome.tabs.executeScript(null, {
            file : 'readPage.js'
        });
    });

});