---
layout: post
title: ! 'Humongous: A Ruby MongoDB Browser'
date: '2012-01-22T16:36:00+05:30'
tags:
- mongodb
- Ruby
- ruby19
- sinatra
tumblr_url: http://bagwanpankaj.com/post/29193300634/humongous-a-ruby-mongodb-browser
---

I recently wrote a lightweight MongoDB browser; written in ruby. It has been written; while keeping non ruby user/developer in mind, for simple use. That means it can be just installed as normal rubygems and fired from console as ususal unix command.

But interesting part is why I had a need to write this,

I generally work on OSX, and love working with it. On OSX we have a very sexy mongodb browser called `MongoHub`, but I had fellow developers, working on other unix systems; and there are not much option left for browsing MongoDB.

So I wrote `humongous` and presenting it here. It is one page application written using ruby and HTML5. Here are some FAQ's

#### Installation

It can be installed as any other rubygems.

{% highlight bash %}
gem install humongous
{% endhighlight %}

and run on terminal/console

{% highlight bash %}
humongous
{% endhighlight %}

And you are good to go it will open this in a browser or you can navigate it on port 9000. to stop it run:

{% highlight bash %}
humongous -K
{% endhighlight %}

In the end, for advanced user

here are options and values they take.
{% highlight bash %}
-K,   --kill          #kill the running process and exit
-S,   —status         #display the current running PID and URL then quit
-s,   —server SERVER  #serve using SERVER (thin/mongrel/webrick)
-o,   —host HOST      #listen on HOST (default: 0.0.0.0)
-p,   —port PORT      #use PORT (default: 9000)
-x,   —no-proxy       #ignore env proxy settings (e.g. http_proxy)
-F,   —foreground     #don’t daemonize, run in the foreground
-L,   —no-launch      #don’t launch the browser
-d,   —debug          #raise the log level to :debug (default: :info)
—app  -dir APP_DIR    #set the app dir where files are stored(“~/.humongous”)
-h,   —help           #Show this message
{% endhighlight %}

Happy Browsing
<3 <3 <3
