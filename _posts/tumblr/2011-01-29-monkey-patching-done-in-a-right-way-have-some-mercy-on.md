---
layout: post
title: Monkey Patching done in a right way (Have some mercy on legacy Ruby)
date: '2011-01-29T11:48:00+05:30'
tags:
- monkeypatching
- Ruby
- tips
tumblr_url: http://bagwanpankaj.com/post/29191661641/monkey-patching-done-in-a-right-way-have-some-mercy-on
---
Classes in Ruby are open; right. That means you can do anything with them, monkey patching around it. But stop doing it before you run into any trouble. I myself used to do it.  

Reopening a class to redefine a method that’s been inherited. But it’s wrong as in future you or your colleague might end up asking question to yourself/himself “Why this method is behaving like this”. Because at that time you might or might not aware about that overriding.  

Here I am trying to show how we can make it safer.    

<script src="https://gist.github.com/bagwanpankaj/801582.js?file=monkey_patching.rb"></script>

`str.method` says it’s coming from MyString; so you might think this method is overridden, But you may not want it. So you try to undefine this method from MyString,

<script src="https://gist.github.com/bagwanpankaj/801582.js?file=monkey_patching_1.rb"></script>

but it does also undefine method inherited from String. That is dangerous. But we would have overcome from this situation if we had did it differently rather rightly.

<script src="https://gist.github.com/bagwanpankaj/801582.js?file=monkey_patching_2.rb"></script>

`str.method :empty?` points you that this method is coming from a included module `MonkeyPatch::MonkeyString`. So we go ahead and remove this method from module `MonkeyPatch::MonkeyString`.    

<script src="https://gist.github.com/bagwanpankaj/801582.js?file=monkey_patching_3.rb"></script>

and our good’ol buddy empty? is back again in action.  

Have a Happy coding.
