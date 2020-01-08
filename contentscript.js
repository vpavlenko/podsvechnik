const TOOLTIP_ID = 'podsvechnik_tooltip';

chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    var elem = document.getElementById(TOOLTIP_ID);
    if (!elem) {
      var elem = document.createElement('div');
      elem.id = TOOLTIP_ID;
    }
    elem.innerHTML = message.highlighted_text;
    document.body.appendChild(elem);
  }
);
