MooFlick
===========

Basic widget to display images from the Flickr JSON feed

See included demo for detailed usage instructions

![Screenshot](http://github.com/ninjapenguin/MooFlick/raw/master/Images/mf.png)

How to use
----------

To use the plugin simply instantiate the class and give it the id of the target container (usually a div) and your flickr id.

	#HTML
	<div id="flickr-items"></div>

	#CSS
	#flickr-items	{
		width:250px;
		margin:15px auto;
		height:400px;  /* Only for demo purposes - you can remove this*/
	}
	#flickr-items div {
		margin:10px auto;
		width:110px;
		height:110px;
		line-height:110px;
	}
	#flickr-items div.even	{
		float:left;
		clear:left;
	}
	#flickr-items div.odd	{
		float:right;
		clear:right;
	}

	#JS
	window.addEvent('domready', function(){
		var mf = new MooFlick('flickr-items','10901345@N05', {});
	})

The above assumes the target area has an id of flickr-items. For working examples check out the demo!

Thats all!

Known Issues
-----------------
Image rotation is only visible in the browsers that support it (IE does NOT support it)

The plugin has been tested in Safari, Firefox, Chrome and IE (7 and 8).

Any feedback greatly appreciated!