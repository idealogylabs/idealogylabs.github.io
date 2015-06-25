---
layout: post
title: Avataree (A ruby gem for Gravatar services)
date: '2010-12-18T16:41:00+05:30'
tags:
- avataree
- gem
- Gravatar
- Rails
- rails3
- Ruby
tumblr_url: http://bagwanpankaj.com/post/29191582871/avataree-a-ruby-gem-for-gravatar-services
---
Avataree is a gem to make your project/app deal with Gravatar services for profile and images in a simplified ruby manner.  

##### Installation  

first you need to create a dependency in your Gemfile
{% highlight ruby %}
gem 'avataree'
{% endhighlight %}     

then let your bundle handle everything.

{% highlight bash %}
bundle install        
{% endhighlight %}

and avataree will be at your service.

##### Uses

In your controller  for fetching gravatar image

{% highlight ruby %}
gravatar(you@email.com) 
{% endhighlight %}

for fetching gravatar profile

{% highlight ruby %}
gravatar_profile(you@email.com)    
{% endhighlight %}

In addition to that avataree provides all options available/provided by [Gravatar](http://en.gravatar.com/site/implement/images/) services.

Here are the details

*Size:*

options `:s` or `:size`, default 80px X 80px  example:

{% highlight ruby %}
gravatar(you@email.com, :size => 100)
{% endhighlight %}

*Default Image:*

If there is no image fount associated with email provided then Gravatar returns default image. A 90 degree tilted G. But you can customize it further with providing values for options :d or :default example:

{% highlight ruby %}
gravatar(you@email.com, :default => "mm")
{% endhighlight %}

values accepted by gravatar are:

404: returns an HTTP 404 (File Not Found) response  
mm: (mystery-man) a simple, cartoon-style silhouetted outline of a person (does not vary by email hash)  
identicon: returns a geometric pattern based on an email hash  
monsterid: returns a generated `monster` with different colors, faces, etc  
wavatar: returns generated faces with differing features and backgrounds  
retro: returns generated, 8-bit arcade-style pixelated faces  

Instead of that you can have your own default image by providing it’s URL (Note: url should be encoded to be carried away smoothly).

In addition to that you can always force gravatar to return default image by providing :f or :force default option.

*Related Links (For further details)*   
[Documentation](http://rubydoc.info/gems/avataree/0.4.0/frames)  
[Source](https://github.com/bagwanpankaj/avataree)  

Credits  Credit for this gem goes to Gravatar team for making such a awesome application.
