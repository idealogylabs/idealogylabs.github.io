---
layout: post
title: Translating Date and DateTime in Rails
date: '2009-10-06T14:51:00+05:30'
tags:
- activaeRecord
- I18n
- Rails
- Translation
- Tricks
tumblr_url: http://bagwanpankaj.com/post/29191427184/translating-date-and-datetime-in-rails
---
I was using newdesk’s translate plugin for generating unicode. But there was no way by i can translate date and date_time.  So I had to find another way.  
Here I am telling you guys what i did   

{% highlight ruby %}
#Just go to locale file (must be in config/locales) 
#go to the ‘date’ key 
#place the appropriate hex Unicode under abbr_day_names month_names day_names abbr_month_names    
{% endhighlight %}

And here you go you will be wondering to see `date_select` and `date_time_select` in your local language.  And don’t worry about ActiveRecord. It will not bother you.  

Happy Boarding.
