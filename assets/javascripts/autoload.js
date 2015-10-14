requirejs.config({
    baseUrl: '',
    paths: {
		'jquery': hallojs.assets_root + '/components/jquery/jquery.min',
		'jquery-ui': hallojs.assets_root + '/components/jquery-ui/ui/minified/jquery-ui.min',
		'rangy': hallojs.assets_root + '/components/rangy-official/rangy-core.min',
		'hallo': hallojs.assets_root + '/components/hallo/dist/hallo',
		'to-markdown': hallojs.assets_root + '/components/to-markdown/dist/to-markdown',
		'showdown': hallojs.assets_root + '/components/showdown/dist/showdown.min',
		'showdown-github': hallojs.assets_root + '/components/showdown-github/dist/showdown-github.min'
    },
	'shim': {
		'jquery-ui': ['jquery'],
		'hallo': ['jquery', 'jquery-ui', 'rangy']
	}
});

requirejs([hallojs.assets_root + '/javascripts/application.js']);
