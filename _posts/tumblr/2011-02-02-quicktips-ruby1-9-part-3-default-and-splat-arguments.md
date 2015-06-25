---
layout: post
title: QuickTips Ruby1.9 [Part 3] Default and Splat arguments
date: '2011-02-02T00:01:00+05:30'
tags:
- quicktips
- ruby18
- ruby19
- tips
- Tricks
tumblr_url: http://bagwanpankaj.com/post/29191683190/quicktips-ruby1-9-part-3-default-and-splat-arguments
---

Ruby 1.9 has changed the way it used to deal with default arguments. The good news is it supports defaults arguments to be at beginning of methods. See gist below for example:

<script src="https://gist.github.com/bagwanpankaj/814848.js?file=ruby_19_default_args.rb"></script>

You can continue to use default arguments at the end of method arguments as you were used to in 1.8.x, See example below

<script src="https://gist.github.com/bagwanpankaj/814848.js?file=ruby_19_default_args_old.rb"></script>

But do note that you can not use both style of defining default arguments. Try it and you would get a syntax error raised.

<script src="https://gist.github.com/bagwanpankaj/814848.js?file=ruby_19_default_args_both.rb"></script>

Splat arguments

Ruby 1.9 also gives you free hand for defining splat argument anywhere in arguments list

<script src="https://gist.github.com/bagwanpankaj/814904.js?file=ruby_19_spalt_args.rb"></script>

you can also define splat argument as last argument as you used to.

Happy Coding :)
