var extOn = true;

chrome.browserAction.onClicked.addListener(function(tab) {
    extOn = !extOn;
    if(extOn) {
        chrome.browserAction.setIcon({path: "icon-38.png", tabId:tab.id});
        makeItHappier();
    }
    else {
        chrome.browserAction.setIcon({path: "iconred-38.png", tabId:tab.id});
    }
});

chrome.webNavigation.onCompleted.addListener(function (tabId, info) {

    if (extOn) {
        makeItHappier();
    }

});

function makeItHappier(){

        chrome.tabs.executeScript(null, {
            file: 'thirdParty/jquery-2.2.3.min.js'
        }, function () {
                chrome.tabs.executeScript(null, {
                    file: 'displayPopup.js'
                }, function () {
                    chrome.tabs.executeScript(null, {
                        file: 'profanity.js'
                    }, function(){
                        chrome.tabs.executeScript(null, {
                            file: 'readPage.js'
                        })
                    })
                })
            });

}