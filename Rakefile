desc 'Generate docs'
task :doc => %w[doc:js]

desc 'Generate JS docs'
task 'doc:js' do
  `java -jar vendor/jsdoc_toolkit-2.4.0/jsrun.jar vendor/jsdoc_toolkit-2.4.0/app/run.js -c=config/jsdoc.json`
end
