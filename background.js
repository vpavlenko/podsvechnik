chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: 'Podsvechnik',
        id: 'menu1', // you'll use this in the handler function to identify this context menu item
        contexts: ['all'],
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "menu1") { // here's where you'll need the ID
        alert('yay');
    }
});
