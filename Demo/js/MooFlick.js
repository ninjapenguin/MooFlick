/*
---
description: MooFlick Class. Takes a container div id, Flickr userid and optional options parameter and displays latest images from the users feed

license: MIT-style

authors:
- Matthew Wells

requires:
- core/1.2.1:*
- more:1.2.4.4:Request.JSONP
- more:1.2.4.4:Assets

provides: [MooFlick]

...
*/
var MooFlick = new Class({

	options: {
		'num':6,
		'url' : 'http://api.flickr.com/services/feeds/photos_public.gne?id={id}&lang=en-us&format=json',
		'delay':350,
		'max_rotation':8,
		'size_reduction':0.4
	},

	Implements: [Events, Options],

	initialize: function(div, user_id, options)
	{
		this.user_id = user_id;
		this.update_area = document.id(div);
		this.counter = 0;
		this.setOptions(options);
		this.options.url = this.options.url.substitute({id:user_id});
		this.make_request();
	},

	make_request: function()
	{
		new Request.JSONP({
			callbackKey: 'jsoncallback',
			url: this.options.url,
			onComplete: function(data) {
				this.queue_images(data)
			}.bind(this)
		}).send();
	},

	queue_images: function(data)
	{
		var images = $A([]);
		var images_data = $A([]);
		$A(data.items.splice(0,this.options.num)).each(function(item, index){
			images[index] = item.media.m;
			images_data[index] = item;
		},this)
		var loaded_images = new Asset.images(images,
			{
				onComplete:function(item){
					this.start_chain(loaded_images, images_data)
				}.bind(this)
			}
		)
	},

	start_chain: function(images, images_data)
	{
		images.each(function(item, index){
			(function() {
				this.add_image(item, images_data[index])
			}).delay(this.options.delay*index, this)
		},this)
	},

	add_image: function(item, data)
	{
		var cl = (this.counter % 2 == 0) ? 'even' : 'odd';
		var t_img = item;

		var d = new Element("div", {
			'class':'single-item '+cl,
			'styles': {
				'opacity':'0',
				'text-align':'center'
			}
		}).adopt( new Element("a", {
			'href':data.link,
			'title':data.title
		}).adopt( t_img ))

		this.update_area.adopt(d);

		this.fireEvent('onAdd', t_img);

		this.show_image(d, t_img)
	},

	show_image: function(container, img)
	{
		var t_size = img.getSize();
		var dest_height = t_size.y * this.options.size_reduction;
		var dest_width = t_size.x * this.options.size_reduction;
		var max = (dest_height > dest_width) ? dest_height : dest_width ;
		var rot = $random(-this.options.max_rotation,this.options.max_rotation)

		img.set('styles',{'height':0,'width':0});
		container.set('styles',{'height':max+8,'width':max+8, 'text-align':'center'})

		container.fade('in');
		img.get('morph').start({
			'height':dest_height,
			'width':dest_width,
			'vertical-align':'middle',
			'-moz-transform':'rotate('+rot+'deg)',
			'-webkit-transform':'rotate('+rot+'deg)',
			'padding':'4px',
			'border':'1px solid #DDDDDD',
			'-webkit-box-shadow': '2px 2px 10px rgba(0, 0, 0, 0.2)',
			'-moz-box-shadow': '2px 2px 10px rgba(0, 0, 0, 0.2)',
			'box-shadow': '2px 2px 10px rgba(0, 0, 0, 0.2)'
		}).chain(function(){
			this.fireEvent('onShow', img)
		}.bind(this));
		this.counter++;
	}
})