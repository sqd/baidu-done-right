var enabled = true;
icon_fixed = {"19": "images/icon_fixed19.png", "38": "images/icon_fixed38.png"}
icon_broken = {"19": "images/icon_broken19.png", "38": "images/icon_broken38.png"}
fixed_tooltip = "回到百度的错误使用方式"
broken_tooltip = "开启百度的正确使用方式"

chrome.browserAction.setTitle({ title: fixed_tooltip })
chrome.browserAction.onClicked.addListener(function(tab) {
    enabled = !enabled;
    chrome.browserAction.setIcon({path: enabled?icon_fixed:icon_broken});
    chrome.browserAction.setTitle({ title: enabled?fixed_tooltip:broken_tooltip })
});

chrome.webRequest.onBeforeRequest.addListener(
    function(details){
        if(enabled){
            return {redirectUrl: chrome.extension.getURL("fixed.html")}
        }
    }, {urls: ["*://www.baidu.com/*"]}, ["blocking"]);
