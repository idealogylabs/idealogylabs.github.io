---
layout: post
title: New Ways of rendering partials
date: '2009-09-17T06:26:00+05:30'
tags:
- Rails
- Tricks
- Views
tumblr_url: http://bagwanpankaj.com/post/29191394574/new-ways-of-rendering-partials
---
I was working on project when I bumped into a new feature, rather an old one; I don’t care although, that we can render partial without writing partial or locals.  Check it out how?  
before   

{% highlight ruby %}
render :partial => ''students/notice_board'', :locals => { :note =>@ note, :show_title => true}    
{% endhighlight %}

this can be rewritten as:   

{% highlight ruby %}
render ''students/notice_board'', :note => @note, :show_title => true    
{% endhighlight %}

and all those thing will be working as is as before.  Pamper your hands, try this.

Three cheers.