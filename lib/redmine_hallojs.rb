module RedmineHallojs
	extend ActionView::Helpers

	class << self
		def root
			@root ||= Pathname(File.expand_path(File.dirname(File.dirname(__FILE__))))
		end

		def assets_root
			@assets_root ||= "#{Redmine::Utils.relative_url_root}/plugin_assets/redmine_hallojs"
		end

		def config
			ActionController::Base.config
		end

		def enabled?
			Setting.text_formatting == "Hallojs"
		end

		def apply_hallo
			require 'redmine_hallojs/application_helper_patch'
		end
	end
end
