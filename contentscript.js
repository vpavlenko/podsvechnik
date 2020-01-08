const TOOLTIP_ID = 'podsvechnik_tooltip';
const TOOLTIP_CLOSE_BUTTON_ID = 'podsvechnik_tooltip_close_button';
const TOOLTIP_CONTENT_ID = 'podsvechnik_tooltip_content';

chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    var elem = document.getElementById(TOOLTIP_ID);
    if (!elem) {
      elem = document.createElement('div');
      elem.id = TOOLTIP_ID;

      var closeButton = document.createElement('div');
      closeButton.id = TOOLTIP_CLOSE_BUTTON_ID;
      closeButton.onclick = function () {
        elem.style.display = 'none';
      };
      elem.appendChild(closeButton);
    }
    var tooltipContent = document.getElementById(TOOLTIP_CONTENT_ID);
    if (!tooltipContent) {
      tooltipContent = document.createElement(TOOLTIP_CONTENT_ID);
      tooltipContent.id = TOOLTIP_CONTENT_ID;
      elem.appendChild(tooltipContent);
    }
    tooltipContent.innerHTML = message.highlighted_text;
    elem.style.display = 'block';
    document.body.appendChild(elem);
  }
);
