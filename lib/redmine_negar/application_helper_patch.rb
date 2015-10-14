require_dependency 'application_helper'

module ApplicationHelper
	def negar_javascripts
    	root = RedmineNegar.assets_root
    	javascript_include_tag(
    		"/plugin_assets/redmine_negar/components/requirejs/require.js",
    		:'data-main' => "#{root}/javascripts/autoload.js"
		)
	end
end
