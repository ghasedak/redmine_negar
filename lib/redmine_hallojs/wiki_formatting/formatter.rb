module RedmineHallojs::WikiFormatting
	class Formatter
		def initialize(text)
			@text = text
		end

		def to_html(&block)
			@text
		end
	end
end
