e=new XMLHttpRequest;e.open("GET","/style.css",!0),e.onload=function(){4===e.readyState&&200===e.status&&chrome.devtools.panels.applyStyleSheet(e.responseText)},e.send(null)