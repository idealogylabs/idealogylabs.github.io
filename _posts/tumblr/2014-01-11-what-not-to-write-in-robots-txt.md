---
layout: post
title: What not to write in Robots.txt
date: '2014-01-11T11:06:15+05:30'
tags:
- security
- systems
- hacking
- robots
- bots
- search-engines
tumblr_url: http://bagwanpankaj.com/post/72946434723/what-not-to-write-in-robots-txt
---
Robots.txt is a vital part of most/all of websites. It feeds the robots from different search engine e.g. Google, Bing etc.

Instructions in this file instructs robots to what to crawl(eat), what not to crawl (eat) by blacklisting or whitelisting urls. The thumb rule that is followed to pick either of the approach are:

1.) Use Whitelisting public urls if one wish to block crawler to eat up newly added url (without entry being written for same in robots.txt). We whitelist url’s by writing

{% highlight bash %}
Allow: /users
Allow: /*/tests
{% endhighlight %}

in the robots.txt

2.) Use Blacklisting urls if one wish to allow crawler to eat up everything else. We blacklist url’s by writing

{% highlight bash %}
Disallow: /users
Disallow: /*/tests
{% endhighlight %}

in robots.txt

Now this is okay as far as one is only blocking public urls from being content aggregated. But this may pose security threats to web application if one is blacklisting secret urls, by making them public (unknowingly), since robots.txt is publicly available and in human readable format.

{% highlight bash %}
Disallow: /secret.html
Disallow: /*/password.xml
{% endhighlight %}

So by blacklisting secret urls, one make them prone to attack. Instead of blacklisting secret urls. One should whitelist other urls

{% highlight bash %}
Allow: /public
Allow: /public/*
{% endhighlight %}

<3 <3 <3
