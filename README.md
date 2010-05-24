MooFlick
===========

Basic widget to display images from the Flickr JSON feed. Grabs a defineable number of the latest images, resizes and displays on page with visual effect. Styles and rotates images to look like small polaroid previews (optional)

See included demo for detailed usage instructions

![Screenshot](http://github.com/ninjapenguin/MooFlick/raw/master/Images/mf.png)

How to use
----------

To use the plugin simply instantiate MooFlick and give it the id of the target container (usually a div) and your flickr id.

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

Syntax
------
	new MooFlick($('target), 'flickr_user_id', [options])

Arguments
---------
1. Element - (element) The DMO element where the flickr images will be placed
2. Flickr user id - (int) The user id for which you will display the latest images

Options
-------
* num				: (int) 	[default = 6] The number of images to display (min 1 max 20)
* url				: (string) 	[default = current] The url of the flickr API (incase they ever change!)
* delay				: (int) 	[default = 350] The delay between adding each image to the page (in microseconds, 0 for no delay)
* max_rotation		: (int) 	[default = 8] The maximum rotation, setting rotation = 20 would given 40 degress of possible rotation (-20 to 20 degrees)
* size_reduction	: (decimal)	[default = 0.4] The scale down factor, set to 1 for no scaling, 0.4 = 40% of original size

Screenshots
-----------
![Screenshot](http://github.com/ninjapenguin/MooFlick/raw/master/Images/s1.png)
![Screenshot](http://github.com/ninjapenguin/MooFlick/raw/master/Images/s2.png)
![Screenshot](http://github.com/ninjapenguin/MooFlick/raw/master/Images/s3.png)

Known Issues
------------
Image rotation is only visible in the browsers that support it (IE does NOT support it)

The plugin has been tested in Safari, Firefox, Chrome and IE (7 and 8).

Any feedback greatly appreciated!