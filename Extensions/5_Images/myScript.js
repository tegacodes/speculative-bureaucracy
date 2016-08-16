//change images on page
var images = document.getElementsByTagName('img');
for (var i = 0, l = images.length; i < l; i++) {
	
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
  //alternatively this could come from a folder of images.

  //images[i].src = "image"+images[i].width+"_"images[i].height+".jpg"; <-this depends on your naming systems.
}

