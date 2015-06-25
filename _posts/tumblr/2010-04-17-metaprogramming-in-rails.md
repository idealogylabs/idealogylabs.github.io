---
layout: post
title: Metaprogramming in Rails
date: '2010-04-17T14:47:00+05:30'
tags:
- Metaprogramming
- Rails
- Ruby
- Tricks
tumblr_url: http://bagwanpankaj.com/post/29191573802/metaprogramming-in-rails
---
Meta-programming means your programming language is writing code for you. And for sure Ruby is a great language having all cool features.Rails being a great ruby framework encashes all features of ruby. Rails itself uses meta-programming every where.

For example in ActiveRecord, we have dynamic method on attributes name like

{% highlight ruby %}
find_by_something(some_possible_values) 
find_all_by_something(spv) 
find_by_something_and_otherthing(some_value, other_value)
{% endhighlight %}

In this topic we will see how we can meta-program in Rails. Using Meta Programming one can reduce LOC to dramatic level and it also reduce headache in maintaining code base.

Here I am not going into details for class_eval and instanse_eval because there are many blog post out there. But I do give some examples.

Consider following:

<script src="https://gist.github.com/bagwanpankaj/633877.js?file=metaprogramming_class_eval.rb"></script>

Let me explain that class_eval evaluates a string or code block in context of class or module it is called upon.

<script src="https://gist.github.com/bagwanpankaj/633877.js?file=meta_instance_eval.rb"></script>

instance_eval can evaluate a string or a code block in the context of the receiver.

The third way to define a method in class or module is define_method.

<script src="https://gist.github.com/bagwanpankaj/633877.js?file=meta_define_method.rb"></script>

Now we can spice our project with metaprogramming. See how?
Suppose in our project we had a model to maintain users

<script src="https://gist.github.com/bagwanpankaj/633877.js?file=user.rb"></script>

We also have a Role model that belongs to user. Schema for role is suppose

{% highlight ruby %}
Role(id: integer, name: string, user_id: integer)
{% endhighlight %}

At the initiation of project the role known were admin and user. So I have defined two method in User model named as is_admin? and is_user?. But after some time we need to add some other roles as we need to define same function for them as well.

So to get rid of this we flavoured our project with bits of metaprogramming. See here how

<script src="https://gist.github.com/bagwanpankaj/633877.js?file=metaprogramming_method_missing.rb"></script>