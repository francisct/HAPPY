var extOn = false;

console.log("background");
chrome.storage.sync.get("happyEnable", function(data) {
        if(data.happyEnable)
        {
            console.log("happyEnable" + data.happyEnable);
            extOn = true;
            chrome.browserAction.setIcon({path: "icon-38.png"});
            makeItHappier();

        }else
        {
            console.log("happyEnable" + data.happyEnable);
            chrome.browserAction.setIcon({path: "iconred-38.png"});
            extOn = false;
        }
});

chrome.browserAction.onClicked.addListener(function(tab) {

    extOn = !extOn;

    console.log("extOn = " + extOn);

    if(extOn) {
        chrome.browserAction.setIcon({path: "icon-38.png"});
        enableExtension();
        makeItHappier();

    }
    else {
        chrome.browserAction.setIcon({path: "iconred-38.png"});
        disableExtension();
    }
});

chrome.tabs.onUpdated.addListener(function (tabId, info) {

   console.log("onCompleted : " + extOn);
   if(extOn && info.status == "complete")
   {
       makeItHappier();
   }
});


function makeItHappier(){

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
                });

}

function enableExtension() {
    chrome.storage.sync.set({'happyEnable': true});
}

function disableExtension() {
    chrome.storage.sync.set({'happyEnable': false});
}