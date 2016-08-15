#Chrome Extension Basics

###From Getting Started tutorial

####3 types of scripts


* Browser action (extension environment) scripts. Runs in pop up box when clicking on icon. This comes from a separate html doc. (popup.html in basic example). Can run p5js sketches here.
* Content scripts run in the html of the webpage. The scripts are executed within the context of the page (user page environment). 
* Background scripts. Run in an isolated environment, cannot access the dom but can access google apis and web apis.

###Example 1: Browser Action

* Set up a folder where you will be working
* Create a file called manifest.json. This is the file that holds it all together. 
* See that manifest links to files icon.png and popup.html. Create these files in your folder. The png is the icon that will be shown in the menu bar of your browser. The html will be a pop up from clicking this icon. [Details here in getting started:](https://developer.chrome.com/extensions/getstarted)  

###Example 2: Browser Action + p5

* This runs p5js in the popup window that appears when the icon is clicked.
* The popup.html is set up like a normal p5js file.


###Example 3: Content Script

* See the content_scripts part in manifest file. Note there is no permissions section for now.
* In this section add matches -> this defines what pages something is to happen on. So changing this to: 
```["http://*/*", "https://*/*"] ```  
matches every http and https domain.
or changing to:
```"matches": ["http://www.facebook.com/*"],```  
matches only that url. Note you need the askerisk at the end!!
or change to:
```["<all_urls"]```  
for all urls. For more on match patterns see [documentation here.](https://developer.chrome.com/extensions/match_patterns)

* js will run ["myscript.js"]
* In example 2, myscript.js has some code in it to pop up an alert.
```alert(document.domain);```
or replace with to make this message pop up.
```alert("hello world");```
* If you get errors when setting this up, validate json with json validator - it's probably a comma.
* The content script is adding javascript to the page you are visiting!!!
* In example 5, we make myScript.js some js to find and replace some terms using a regular expression. See the links in this example for support on this.

###Example 4: CSS

* Modifies the CSS of the page. Need to add in ```!important ``` to override existing css.  
* Set the manifest file to define which page this will work on.

###Example 5: Find and Replace

* Simple find and replace example using a content script and a basic regex. 

###Example 6: Background scripts

* They run in an isolated way. They have access to all the chrome APIs. Content scripts cannot do much of this. 
* [Documentation here](https://developer.chrome.com/extensions/background_pages)
* You cannot access the dom directly. But you can combine the background script and the content script and pass messages between them. This gives you access to the chrome API.
* [Chrome APIS](https://developer.chrome.com/extensions/api_index)
* [Web APIS](https://developer.chrome.com/extensions/api_other)



###Callbacks

* [Javascript callbacks](http://dreamerslab.com/blog/en/javascript-callbacks/)
* [Javascript callbacks again](http://cwbuecheler.com/web/tutorials/2013/javascript-callbacks/)