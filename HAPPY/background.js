var extOn = false;
function myListener(tabId, info) {

    chrome.tabs.executeScript(null, {
        file : 'thirdParty/jquery-2.2.3.min.js'
    }, function () {
        chrome.tabs.executeScript(null, {
            file: 'thirdParty/semantria/SemantriaJavaScriptSDK.js'
        }, function () {
            chrome.tabs.executeScript(null, {
                file: 'profanity.js'
            }, function () {
                chrome.tabs.executeScript(null, {
                    file: 'readPage.js'
                })
            })
        })
    })
};

chrome.browserAction.onClicked.addListener(function(tab) {
    extOn = !extOn;
    if(extOn) {
        chrome.browserAction.setIcon({path: "icon.png", tabId:tab.id});
        chrome.tabs.onUpdated.addListener(myListener(tab.id, null));
    }
    else {
        chrome.browserAction.setIcon({path: "iconred.png", tabId:tab.id});
        chrome.tabs.onUpdated.removeListener(myListener(tab.id, null));
    }
});

// chrome.tabs.onUpdated.addListener(function (tabId, info) {
//
//     chrome.tabs.executeScript(null, {
//         file : 'thirdParty/jquery-2.2.3.min.js'
//     }, function () {
//         chrome.tabs.executeScript(null, {
//             file: 'thirdParty/semantria/SemantriaJavaScriptSDK.js'
//         }, function () {
//             chrome.tabs.executeScript(null, {
//                 file: 'profanity.js'
//             }, function () {
//                 chrome.tabs.executeScript(null, {
//                     file: 'readPage.js'
//                 })
//             })
//         })
//     })
// });