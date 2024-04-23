(async () => {
  try {
    const request = await fetch("/style.css");
    const response = await request.text();
    chrome.devtools.panels.applyStyleSheet(response);
    console.log("Applied dev-tools stylesheet");
  } catch (error) {
    console.error(error);
  }
})();
