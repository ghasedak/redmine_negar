define(
	['jquery', 'rangy', 'to-markdown', 'showdown', 'jquery-ui', 'hallo'],
	function ($, rangy, toMarkdown, showdown) {
		window.toMarkdown = toMarkdown;
		window.rangy = rangy;
		window.showdown = showdown;

		$('.preview').hallo({
			'plugins': {
				'halloformat': {
					 'formattings': {
					 	'bold': true,
					 	'italic': true,
					 	'strikethrough': true,
					 	'underline': false
					 }
				},
				'halloheadings': {},
				'hallolists': {},
				'hallojustify': {},
				'hallolink': {},
				'halloreundo': {}
			},
			'toolbar': 'halloToolbarFixed'
		});

		var markdownize = function(content) {
			var html = content.split("\n").map($.trim).filter(function(line) {
				return line != "";
			}).join("\n");

			return toMarkdown(html);
		};

		var converter = new showdown.Converter({
			'strikethrough': true,
			'tables': true
		});

		// Method that converts the HTML contents to Markdown
		var showSource = function(content) {
			var markdown = markdownize(content);
			if (jQuery('#source').get(0).value == markdown) {
			  return;
			}
			jQuery('#source').get(0).value = markdown;
		};


		var updateHtml = function(content) {
			if (markdownize(jQuery('.preview').html()) == content) {
			  return;
			}
			var html = this.htmlize(content);
			jQuery('.preview').html(html); 
		}.bind({
			htmlize: converter.makeHtml
		});

		// Update Markdown every time content is modified
		jQuery('.preview').bind(
			'hallomodified',
			function(event, data) {
				this.showSource(data.content);
			}.bind({
				showSource: showSource
			})
		);
		jQuery('#source').bind(
			'keyup',
			function (eData) {
				this.updateHtml(eData.target.value);
			}.bind({
				updateHtml: updateHtml
			})
		);
		showSource(jQuery('.preview').html());
	}
);
