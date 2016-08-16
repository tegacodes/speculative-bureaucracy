alert("hello world");

//Add a badge to the icon, this can happen in a background script.
chrome.browserAction.setBadgeBackgroundColor({
	color: '#ff0000'
});
chrome.browserAction.setBadgeText({
	text: 'Hey'
});

