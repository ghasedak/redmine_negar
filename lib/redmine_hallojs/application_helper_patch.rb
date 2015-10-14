require_dependency 'application_helper'

module ApplicationHelper
	def hallojs_javascripts
    	root = RedmineHallojs.assets_root
    	javascript_include_tag(
    		"/plugin_assets/redmine_hallojs/components/requirejs/require.js",
    		:'data-main' => "#{root}/javascripts/autoload.js"
		)
	end
end
