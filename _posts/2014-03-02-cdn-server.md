---
layout: post
title:  "Static file server"
date:   2014-03-02 11:03:13
tags: cdn server static
---
I made to write static file server, can be used as CDN server. Find it at [github](https://github.com/bagwanpankaj/web_share)

#### Clone it

{% highlight elixir %}
git clone git@github.com:bagwanpankaj/web_share.git

cd webshare

mix compile

mix run --no-halt
{% endhighlight %}

If you face any problem, try

{% highlight elixir %}
mix deps.clean --all

mix deps.get

mix compile

mix run --no-halt
{% endhighlight %}

Happy Coding :)