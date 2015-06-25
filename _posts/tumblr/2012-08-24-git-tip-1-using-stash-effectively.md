---
layout: post
title: ! 'GIT TIP#1 Using stash effectively '
date: '2012-08-24T12:26:00+05:30'
tags: 
- git
- tips
- productivity
tumblr_url: http://bagwanpankaj.com/post/30090604964/git-tip-1-using-stash-effectively
---
everyone who uses GIT, knows about stash, here are some quick tip about using stash effectively

1.) name those bastards (that are to be used in future) with

{% highlight bash %}
git stash save <a-good-name>
{% endhighlight %}


2.) just stash (if not to be used in future)

{% highlight bash %}
git stash
{% endhighlight %}

3.) pop, dont apply (if not to be used in future)(saves stash list from littering)

{% highlight bash %}
git stash pop
{% endhighlight %}
