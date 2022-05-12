# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "web_novel"
  spec.version       = "0.1.0"
  spec.authors       = ["opsaaaaa"]
  spec.email         = ["sean@ferney.org"]

  spec.summary       = "A nice place to display your web novel"
  spec.homepage      = "https://github.com/opsaaaaa/web_novel_theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_development_dependency "webrick", "~> 1.6", '>= 1.6.1'
  spec.add_development_dependency 'jekyll-page-boilerplate', '~> 4.2', '>= 4.2.1'

  spec.add_runtime_dependency "jekyll", "~> 4.2"  
  spec.add_runtime_dependency "jekyll-seo-tag", '~> 2.8'  
  spec.add_runtime_dependency "jekyll-feed", "~> 0.16"
  spec.add_runtime_dependency 'jekyll-paginate-v2', '~> 3.0'
  spec.add_runtime_dependency 'jekyll-render-order', '~> 1.0'

end
