module RedmineHallojs::WikiFormatting
	class Formatter
		include Redmine::WikiFormatting::LinksHelper

		def initialize(text)
			@text = text
		end

		def to_html(&block)
			auto_link!(@text)
		end
	end
end
