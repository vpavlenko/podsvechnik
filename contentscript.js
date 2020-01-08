chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    alert('Received the message: ' + JSON.stringify(message));
    message.highlighted_text
    var elem = document.createElement('div');
    elem.innerHTML = message.highlighted_text;
    document.body.appendChild(elem);
  }
);
