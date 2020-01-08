chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: 'Highlight the selection',
        id: 'podsvechnik',
        contexts: ['all'],
    });
});

function sendMessage(json) {
  chrome.tabs.query({active: true, currentWindow: true},
    function callback(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, json, function (response) {});
      chrome.runtime.sendMessage(json, function (response){});
    }
  );
}

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "podsvechnik") {
      var data = new FormData();
      data.append('text', info.selectionText);

      fetch('https://english.edward.io/parse', {
        method: 'POST',
        mode: 'no-cors',
        body: data
      }).then(response => response.text()).then(data => { 
        sendMessage({'highlighted_text': data});
      });
    }
});
