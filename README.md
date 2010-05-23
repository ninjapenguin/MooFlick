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
	#flickr-items div	{
		text-align:center;
		width:115px;
		height:115px;
		line-height:115px;
	}
	#flickr-items div.even	{
		float:left;
		clear:left;
	}
	#flickr-items div.odd	{
		float:right;
		clear:right;
	}
	#flickr-items div img	{
		padding:4px;
		border:1px solid #DDDDDD;
		vertical-align:middle;
		-webkit-box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
		-moz-box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
	}

	#JS
	window.addEvent('domready', function(){
		var mf = new MooFlick('flickr-items','10901345@N05', {});
	})

Thats all!

Known Issues
-----------------
There are no knows issues at this time.

The plugin has been tested in Safari, Firefox, Chrome and IE.

Any feedback greatly appreciated!