require 'rubygems'
require 'bundler'
Bundler.setup

require 'sinatra'
require 'sinatra/reloader' if development?

# See http://stackoverflow.com/questions/2437390/serving-static-files-with-sinatra/2438507#2438507
get '/' do
  File.read('public/index.html')
end
