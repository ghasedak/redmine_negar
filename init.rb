require 'redmine'
require 'redmine_negar'

Rails.application.config.to_prepare do
  RedmineNegar.apply_negar
end

Redmine::Plugin.register :redmine_negar do
	name 'Redmine Negar plugin'
	author 'Pouyan Heyratpour'
	description 'Redmine markdown/rich editor plug-in'
	version '1.0.0'
	requires_redmine :version_or_higher => '3.0.0'
	url 'https://github.com/ghasedak/redmine_negar'

	settings(:partial => 'settings/negar')

	wiki_format_provider	'Negar',				# name
		RedmineNegar::WikiFormatting::Formatter,	# formatter
		RedmineNegar::WikiFormatting::Helper		# helper
end
