requirejs.config({
    baseUrl: '',
    paths: {
		'jquery': 'assets/components/jquery/jquery.min',
		'jquery-ui': 'assets/components/jquery-ui/ui/minified/jquery-ui.min',
		'rangy': 'assets/components/rangy-official/rangy-core.min',
		'hallo': 'assets/components/hallo/dist/hallo',
		'to-markdown': 'assets/components/to-markdown/dist/to-markdown',
		'showdown': 'assets/components/showdown/dist/showdown.min',
		'showdown-github': 'assets/components/showdown-github/dist/showdown-github.min'
    },
	'shim': {
		'jquery-ui': ['jquery'],
		'hallo': ['jquery', 'jquery-ui', 'rangy']
	}
});

requirejs(['assets/javascripts/application']);
