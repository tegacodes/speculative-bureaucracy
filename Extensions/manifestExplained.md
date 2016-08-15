For all manifest file fields for Extensions, see the manifest documentation page:
[https://developer.chrome.com/extensions/manifest](https://developer.chrome.com/extensions/manifest)

* JSON file format
* JSON validator is here: [http://jsonlint.com/](http://jsonlint.com/)
* You cannot include comments as I have here.

{
  "manifest_version": 2, //need to use version 2

  "name": "Getting started example", 
  "description": "This extension shows a Google Image search result for the current page",
  "version": "1.0",

  "browser_action": {  //tells google chrome that when you click on icon, what is the default 
                        //file to popup. If you change the path of this to an invalid file. 
                        //it will show you page not found.
    "default_icon": "bee.png",
    "default_popup": "popup.html"
  },
  "icons": { //you can update the icons here. there are different sized icons used in 
             //different spots
  "64": icon.png
  },
  "permissions": [  //permissions required by your extension. Active tab etc. Tutorial here:
                    //you can see permissions by clicking on permissions on the add on page.

    "tabs",
    "activeTab",
    "https://ajax.googleapis.com/"
  ]
}