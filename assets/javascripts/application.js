define(
	['jquery', 'rangy', 'to-markdown', 'showdown', 'jquery-ui', 'hallo'],
	function ($, rangy, toMarkdown, showdown) {
		window.toMarkdown = toMarkdown;
		window.rangy = rangy;
		window.showdown = showdown;

		var sourceEditor = $('#' + hallojs.source_id).get(0);
		sourceEditor.classList.add('code', 'content');

		var parent = $(sourceEditor).parent().get(0);

		var previewer = sourceEditor.nextSibling ?
			parent.insertBefore(document.createElement('div'), sourceEditor.nextSibling) :
			parent.appendChild(document.createElement('div'));
		previewer.id = hallojs.preview_id;
		var compStyle = window.getComputedStyle(sourceEditor);
		previewer.style.height = String(
			Number(/\d+/.exec(compStyle.height)[0]) - 
				(Number(/\d+/.exec(compStyle.paddingBottom)[0]) + Number(/\d+/.exec(compStyle.paddingTop)[0]))
		) + 'px';
		previewer.classList.add('code', 'preview');
		var attrContentEditable = document.createAttribute('contenteditable');
		attrContentEditable.value = true;
		previewer.attributes.setNamedItem(attrContentEditable);

		// The clear div
		var clear = parent.insertBefore(document.createElement('div'), previewer.nextSibling);
		clear.classList.add('clear');

		$(previewer).hallo({
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
			if ($(sourceEditor).get(0).value == markdown) {
			  return;
			}
			$(sourceEditor).get(0).value = markdown;
		}.bind({
			sourceEditor: sourceEditor
		});


		var updateHtml = function(content) {
			if (markdownize($(this.previewer).html()) == content) {
			  return;
			}
			var html = this.htmlize(content);
			$(this.previewer).html(html); 
		}.bind({
			htmlize: converter.makeHtml,
			previewer: previewer
		});

		// Update Markdown every time content is modified
		$(previewer).bind(
			'hallomodified',
			function(event, data) {
				this.showSource(data.content);
			}.bind({
				showSource: showSource
			})
		);
		$(sourceEditor).bind(
			'keyup',
			function (eData) {
				this.updateHtml(eData.target.value);
			}.bind({
				updateHtml: updateHtml
			})
		);
		updateHtml(sourceEditor.value);
	}
);
