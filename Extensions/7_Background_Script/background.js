alert("hello world");

//Add a badge to the icon
chrome.browserAction.setBadgeBackgroundColor({
	color: '#ff0000'
});
chrome.browserAction.setBadgeText({
	text: 'Hey'
});

chrome.pageAction.show(table);