# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-web-novel"
  spec.version       = "1.0.0"
  spec.authors       = ["opsaaaaa"]
  spec.email         = ["sean@ferney.org"]

  spec.summary       = "A nice place to display your web novel"
  spec.homepage      = "https://github.com/opsaaaaa/web_novel_theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| 
    f.match(%r!^(assets|exe|pages|admin|_layouts|_includes|_sass|_boilerplates|LICENSE|README|_config\.yml)!i) 
  }
  
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }

  spec.add_development_dependency "webrick", "~> 1.6", '>= 1.6.1'
  spec.add_development_dependency 'jekyll-page-boilerplate', '~> 5.0', '>= 5.0.0'

  spec.add_runtime_dependency "jekyll", "~> 4.3"
  spec.add_runtime_dependency "jekyll-seo-tag", '~> 2.8'
  spec.add_runtime_dependency "jekyll-feed", "~> 0.17"

end
