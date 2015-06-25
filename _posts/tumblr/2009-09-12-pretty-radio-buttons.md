---
layout: post
title: Pretty Radio Buttons
date: '2009-09-12T22:43:00+05:30'
tags:
- JavaScript
- jQuery
tumblr_url: http://bagwanpankaj.com/post/29191361119/pretty-radio-buttons
---
This tutorial is an extension of Aaron’s blog.  This tutorial shows how to implement radio button using checkboxes and css with the help of jQuery.    

I am working on a project in that i required some pretty checkboxes as well as some radio buttons. I googled on the web and found [aaron’s blog](http://aaronweyenberg.com/90/pretty-checkboxes-with-jquery). but that script just supports the checkboxes. It was really fascinating but i needed radio button also  

I gave up googling the web, sat back and started tweaking the aaron’s script.

Let’s go to the code

1.) HTML  Demo Radio buttons    This is first radio button  Select    This is second radio button  Select   

2.) jQuery I have written little jQuery to make this running.  The jQuery code is described below.   

{% highlight javascript %}
jQuery(".checklist .act_as_radio_button").click( function(event) { 
  event.preventDefault();
  jQuery(this).parent().siblings().find(":checkbox").removeAttr("checked");
  jQuery(this).parent().siblings().removeClass("selected");
} );   
{% endhighlight %} 

Copy and paste this code in jQuery’s ready function and you are done.  
