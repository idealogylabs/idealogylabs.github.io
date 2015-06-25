---
layout: post
title: Difference Between Gem and Plugin
date: '2009-10-12T04:40:00+05:30'
tags:
- difference
- gem
- plugin
- Rails
tumblr_url: http://bagwanpankaj.com/post/29191480752/difference-between-gem-and-plugin
---
Now a days many developers are developing web application using ruby on rails. But a few of them know what actually the difference between “Gem” and “Plugin”.  

Here are some of them 

RubyGems 

1.) Gem is a packaged ruby application using the packaging system defined by
RubyGems.  
2.) Rails itself is a Gem  
3.) We can install,upgrade and query the gem version.  
4.) Gem installed for Ruby interpreter can be used system-wide by that interpreter.  

Plugin  

1.) Plugin is an extension of Rails Framework.  
2.) Can not be upgraded by using a command. To upgrade one have to uninstall and then install upgraded version.  
3.) Has to be hooked into rails application. (has to have init.rb)  
4.) Have an install.rb file.  
5.) Can only be used application wide.    

Happy Coding :)
