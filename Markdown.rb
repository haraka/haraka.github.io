#!/usr/bin/ruby

require 'rugged'
require 'linguist'
require 'github/markup'

puts ARGV[0]
puts GitHub::Markup.render(ARGV[0], File.read(ARGV[0]));
