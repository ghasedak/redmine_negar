require 'redmine'
require 'redmine_hallojs'

Rails.application.config.to_prepare do
  RedmineHallojs.apply_hallo
end

Redmine::Plugin.register :redmine_hallojs do
	name 'Redmine Hallojs plugin'
	author 'Pouyan Heyratpour'
	description 'Hallo is the simplest web editor imaginable and this is Redmine plug-in'
	version '1.0.0'
	requires_redmine :version_or_higher => '3.0.0'
	url 'http://github.com/ghasedak/redmine_hallojs'

	settings(:partial => 'settings/hallojs')

	wiki_format_provider	'Hallojs',				# name
		RedmineHallojs::WikiFormatting::Formatter,	# formatter
		RedmineHallojs::WikiFormatting::Helper		# helper
end
