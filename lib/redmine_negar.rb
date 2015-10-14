module RedmineNegar
	extend ActionView::Helpers

	class << self
		def root
			@root ||= Pathname(File.expand_path(File.dirname(File.dirname(__FILE__))))
		end

		def assets_root
			@assets_root ||= "#{Redmine::Utils.relative_url_root}/plugin_assets/redmine_negar"
		end

		def config
			ActionController::Base.config
		end

		def enabled?
			Setting.text_formatting == "Negar"
		end

		def apply_negar
			require 'redmine_negar/application_helper_patch'
		end
	end
end
