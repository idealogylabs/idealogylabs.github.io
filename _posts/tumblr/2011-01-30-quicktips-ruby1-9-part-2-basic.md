---
layout: post
title: QuickTips Ruby1.9 [Part 2] Basic
date: '2011-01-30T23:19:00+05:30'
tags:
- basic_object
- object
- quicktips
- ruby19
tumblr_url: http://bagwanpankaj.com/post/29191676827/quicktips-ruby1-9-part-2-basic
---
Base Object is now BasicObject not Object in Ruby 1.9

{% highlight bash %}
#Ruby1.9
String.superclass #=> Object
String.superclass.superclass #=> BasicObject
String.superclass.superclass.superclass #=> nil
{% endhighlight %}


and here is what it was in Ruby 1.8

{% highlight bash %}
#Ruby1.8
String.superclass #=> Object
String.superclass.superclass #=> nil
{% endhighlight %}
