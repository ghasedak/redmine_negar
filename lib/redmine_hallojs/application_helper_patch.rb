require_dependency 'application_helper'

module ApplicationHelper
	def hallojs_javascripts
    	root = RedmineHallojs.assets_root
    	javascript_include_tag(
    		"components/requirejs/require.js",
    		:plugin => "redmine_hallojs",
    		:'data-main' => "#{root}/javascripts/autoload.js"
		)
	end
end
