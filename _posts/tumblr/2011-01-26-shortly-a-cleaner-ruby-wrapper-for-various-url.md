---
layout: post
title: Shortly (A cleaner Ruby wrapper for various url shortener services)
date: '2011-01-26T22:59:00+05:30'
tags:
- cli
- gem
- Rails
- Ruby
- sinatra
- url_shortener
tumblr_url: http://bagwanpankaj.com/post/29191589294/shortly-a-cleaner-ruby-wrapper-for-various-url
---
As mentioned in header Shortly is a cleaner Ruby wrapper for various url shortener services. It support maximum number of url shortener services out there huh(excluding url shortener services whose own url are not even short. Believe me they are many).  

Before you compare Shortly to any other gem let me tell you that I did not build it to be used it only with “Rails”,(although you can use it if you want..) that means it is framework agnostic. I build it to put many terminal freaks(or homesick) (that’s what I love to call terminal people) at ease, So next time they want their url shortened, can use terminal (no need to fire a bloddy web browser taking a load of time just to start, so that they can login, get their url short.)  

#### Installation  

Oh please don’t ask this silly question you grown ups. But for newbie, fire up a terminal and type    


#### Supported Services  

Many services are supported as listed  

[Goo.gl](http://goo.gl/)  
[Bit.ly](http://http//bit.ly)  
[J.mp](http://j.mp/)  
[Is.gd](http://is.gd/)  
[V.gd](http://v.gd/)   
[Sn.im](http://sn.im/)  
[Tinyurl](http://tinyurl.com/) This does not seem tiny at all  
[ShortSwitch](http://shortswitch.com/) For domain that uses this like lg.gd   
Be sure to cross check by `#!ruby Shortly.active_services`  

#### Uses.  

##### Command Line Utility  

Shortly provides command line utility. See some uses below:

{% highlight bash %}
shortly 'http://shortme.com/' #uses googl service and shorten method by default
{% endhighlight %}

By default it uses Googl to short urls but you can specify which service to use. Type `shortly -h` for more info    

{% highlight bash %}
shortly ‘http://shortme.com/’ -s bitly -l -p -m method-to-use
{% endhighlight %}

here are options and there possible values:

{% highlight bash %}
Options           What value do they take

-s or —service    Service to use(e.g. bitly, isgd(default googl))
-m or —method     Method to use(e.g. expand or shorten or analytics(default shorten))
-l or —login      Login credential (required for some services only)
-p or —apiKey     API Key credentials (required for some services only)
{% endhighlight %}

some more examples    

<script src="https://gist.github.com/bagwanpankaj/797078.js?file=gistfile4.bat"></script>

IRB or ruby utility mode  

You can use these utilities to any ruby environment  

<script src="https://gist.github.com/bagwanpankaj/797078.js?file=gistfile5.rb"></script>  


Note: We are developing many other services to stay tuned on [github](http://goo.gl/irJ0A) and [RubyGems](http://goo.gl/WJ9j5)

Thanks.
