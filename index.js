(async () => {
  try {
    const request = await fetch("/style.css");
    const response = await request.text();
    chrome.devtools.panels.applyStyleSheet(response);
  } catch (error) {
    console.error(error);
  }
})();
