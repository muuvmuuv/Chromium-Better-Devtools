var xhr = new XMLHttpRequest();
xhr.open("GET", "/style.css", true);
xhr.onload = function () {
  console.log("Loading", xhr.readyState);
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log("Loaded style");
      console.log(xhr.responseText);
      chrome.devtools.panels.applyStyleSheet(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function () {
  console.error(xhr.statusText);
};
xhr.send(null);
