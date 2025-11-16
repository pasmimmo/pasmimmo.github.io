source "https://rubygems.org"

# Let GitHub Pages decide Jekyll + minima versions
gem "github-pages", group: :jekyll_plugins

# Extra plugins you may want to use
# (jekyll-feed and jekyll-seo-tag sono già inclusi in github-pages)
gem "jekyll-include-cache", group: :jekyll_plugins

# Windows timezone data (no more :mingw / :mswin deprecation)
platforms :windows do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Faster file watching on Windows
gem "wdm", "~> 0.1", platforms: [:windows]

# JRuby-specific http parser (ok lasciarlo, non ti dà fastidio su MRI)
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]
#gem "faraday-retry"
