requirejs.config({
    baseUrl: '',
    paths: {
		'jquery': negar.assets_root + '/components/jquery/jquery.min',
		'jquery-ui': negar.assets_root + '/components/jquery-ui/ui/minified/jquery-ui.min',
		'rangy': negar.assets_root + '/components/rangy-official/rangy-core.min',
		'hallo': negar.assets_root + '/components/hallo/dist/hallo',
		'to-markdown': negar.assets_root + '/components/to-markdown/dist/to-markdown',
		'showdown': negar.assets_root + '/components/showdown/dist/showdown.min',
		'showdown-github': negar.assets_root + '/components/showdown-github/dist/showdown-github.min'
    },
	'shim': {
		'jquery-ui': ['jquery'],
		'hallo': ['jquery', 'jquery-ui', 'rangy']
	}
});

requirejs([negar.assets_root + '/javascripts/application.js']);
