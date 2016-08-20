For all manifest file fields for Extensions, see the manifest documentation page:
[https://developer.chrome.com/extensions/manifest](https://developer.chrome.com/extensions/manifest)

* JSON file format
* JSON validator is here: [http://jsonlint.com/](http://jsonlint.com/)
* You cannot include comments as I have here.

 ```
 {  
  "manifest_version": 2, 
  "name": "Getting started example",  
  "description": "This extension shows a Google Image search result for the current page",  
  "version": "1.0",  
```

* Need to use version 2   
```
  "browser_action": {    
    "default_icon": "bee.png",    
    "default_popup": "popup.html"  
  },    
```

* Set your icon tells google chrome that when you click on icon, what is the default file to popup. If you change the path of this to an invalid file. it will show you page not found. 
``` 
  "icons": {   
  "64": icon.png    
  },  
```

* You can update the icons here. there are different sized icons used in different spots   
```
  "permissions": [  
    "tabs",    
    "activeTab",    
    "https://ajax.googleapis.com/"    
  ]    
```

* permissions required by your extension. Active tab etc. [Tutorial here.](https://developer.chrome.com/extensions/permissions) you can see permissions by clicking on permissions on the add on page.  

```
  "content_scripts": [    
    {                  
      "matches": ["https://www.facebook.com/*"], 
      websites use "<all_urls>"   
      "js": ["myScript.js"]    
    }   
  ]   
}   
```

* Adds javascript to the page. Changes content of page. Define what page you want this to happen on for all and link to script you want to run!!  
