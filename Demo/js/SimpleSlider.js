var SimpleShow = new Class({
	Implements: [Options, Events],

	Options:{
		
	},

	initialize: function(container, options)
	{
		this.container = $(container);
		this.setOptions(options)
		this.setup();
	},

	setup: function()
	{
		var sz1 = this.container.getFirst().getSize();
		var sz1 = sz1.x;

		// Viewport width
		var sz = sz1;
		this.slide_width = sz;
		// Inner container width
		var children = this.container.getChildren();
		this.slides = children;
		this.num_slides = children.length
		var cnt_sz = sz1*this.num_slides;

		this.container.set('styles',{'width':cnt_sz});

		this.viewport = new Element("div",{
			styles:{
				'width': sz,
				'overflow':'hidden',
				'margin':'auto',
				'-moz-box-shadow':'2px 2px 10px rgba(0,0,0,0.3)',
				'-webkit-box-shadow':'2px 2px 10px rgba(0,0,0,0.3)',
				'box-shadow': '2px 2px 10px rgba(0,0,0,0.3)'
			}
		}).wraps(this.container)

		this.viewport_scroller = new Fx.Scroll(this.viewport);
		this.current_slide = 1;

		this.next_btn = new Element("input",{
			'type':'button',
			'value':'next'
		})
		this.next_btn.addEvent('click',this.next.bindWithEvent(this))

		new Element("p",{}).adopt(this.next_btn).inject(this.viewport,'after');
	},

	next: function()
	{
		if (this.current_slide == this.num_slides) {
			// Rewind to beginning
			this.viewport_scroller.toLeft()
			this.current_slide = 1;
		} else {
			this.viewport_scroller.start(this.slide_width*(this.current_slide),0)
			this.current_slide++;
		}

		this.fireEvent('onSlideShow',{'index':this.current_slide, 'slide':this.slides[this.current_slide-1]})

	}
})