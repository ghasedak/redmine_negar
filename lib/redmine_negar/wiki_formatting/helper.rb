module RedmineNegar::WikiFormatting
	module Helper
		def editor_env(field_id)
			root = RedmineNegar.assets_root
			javascript_tag(
				<<-EOT
				negar = {
					'assets_root': '#{root}',
					'source_id': '#{field_id}',
					'preview_id': '#{field_id}_preview'
				};
				EOT
			)
		end

	    def wikitoolbar_for(field_id)
	    	content_for :header_tags do
	    		stylesheet_link_tag('editor', :plugin => 'redmine_negar') +
	    		stylesheet_link_tag('/plugin_assets/redmine_negar/components/font-awesome/css/font-awesome.min.css') +
	    		negar_javascripts
    		end

	    	editor_env(field_id)
	    end

	    # When wiki page is black, page content set to this
	    def initial_page_content(page)
	      "# #{ERB::Util.html_escape page.pretty_title}"
	    end

	    def heads_for_wiki_formatter
	    end
	end
end
