chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        title: 'Podsvechnik',
        id: 'menu1', // you'll use this in the handler function to identify this context menu item
        contexts: ['all'],
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "menu1") { // here's where you'll need the ID
      var data = new FormData();
      data.append('text', info.selectionText);

      fetch('https://english.edward.io/parse', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          // 'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *client
        body: data
      }).then(response => response.text()).then(data => { alert(data); });
    }
});
