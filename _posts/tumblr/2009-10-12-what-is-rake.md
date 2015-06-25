---
layout: post
title: What is Rake
date: '2009-10-12T04:56:00+05:30'
tags:
- Rails
- rake
- Ruby
tumblr_url: http://bagwanpankaj.com/post/29191491685/what-is-rake
---
In Ruby Rake is a software build tool similar to linux’s make, Apache’s Ant. It is Written and use ruby Language.  

In rake you can define dependencies of one rake task on other pre written tasks.  When we run the rake command it looks for a rakefile to load the rake task for predefined or default rake tasks then it loads rake task passed to it as a parameter.  

If one don’t pass it parameters then it lists all the defined rake task.