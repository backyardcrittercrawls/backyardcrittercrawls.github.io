Gem::Specification.new do |spec|
  spec.name          = "bcc_theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Your Name"]
  spec.email         = ["your-email@example.com"]

  spec.summary       = "A beautiful nature-themed Jekyll theme with autumn colors and salamander mascot"
  spec.homepage      = "https://github.com/yourusername/bcc_theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_development_dependency "jekyll", "~> 4.0"
  spec.add_development_dependency "bundler", "~> 2.0"
end 