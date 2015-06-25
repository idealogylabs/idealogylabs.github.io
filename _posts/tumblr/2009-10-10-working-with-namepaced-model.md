---
layout: post
title: Working with namepaced model
date: '2009-10-10T03:20:00+05:30'
tags:
- activaeRecord
- I18n
- namespaced
- Rails
- Tricks
tumblr_url: http://bagwanpankaj.com/post/29191437892/working-with-namepaced-model
---

Sometime we have to work with namespaced model in Ruby on Rails to keep our code clean. 

For example: I have model named as `Attandance.rb`, Sometime to keep our code clean we have to put them in custom dir. This scenario is normal while working with two or three modules. for ex. I have three module in a project for school. 

Admin module, Teachers module and a Student module.  So it is better to put all stuff that belongs to teacher in a custom dir named `Teachers`  

Be sure that folder name does not match any model that have been put under this folder. I prefer to use plural names for these directories.  But now begins the real headache; to access model under the `Teachers` directory I have to write this  `Teachers::Attendance.find` and all that. And for sure it will be a headache while translating with I18n.  

But this violates Ruby’s very own DRY approach.  So to keep being DRY do the below written things. 

{% highlight ruby %}
#Open config/environment.rb file. 
#Write config.load_paths += %W(#{RAILS_ROOT}/app/models/teachers, 
#{RAILS_ROOT}/app/models/ur_custom_dir)  
{% endhighlight %}  

And you are done. 

now you can have access to these model like others `Attendance.find()` and while translating you can write normally as you do whith other models.   

{% highlight yaml %}
hi: 
  activerecord: 
    attributes: 
      attendance: 
        teacher_id: xE0\xA4\x97? 
        name: \xE0\xA4\x94\xE0\xA4\xB0    
{% endhighlight %}

Don’t go on Unicode they are not real.  This is a little thing but it solves many problem that can come in your way.  

Happy boarding.
