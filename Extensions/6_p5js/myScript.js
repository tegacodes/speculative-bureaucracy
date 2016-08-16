//the content script that adds in the p5js sketch.
// Avoid recursive frame insertion...
var extensionOrigin = 'chrome-extension://' + chrome.runtime.id;
if (!location.ancestorOrigins.contains(extensionOrigin)) {
  var iframe = document.createElement('iframe');
  // Must be declared at web_accessible_resources in manifest.json
  iframe.src = chrome.runtime.getURL('index.html');

  // Some styles for a fancy sidebar
  iframe.style.cssText = 'position:fixed;top:0;left:0;z-index:-2;border:0;';
  iframe.style.width = window.innerWidth + 'px';
  iframe.style.height = window.innerHeight + 'px';
  document.body.appendChild(iframe);
}