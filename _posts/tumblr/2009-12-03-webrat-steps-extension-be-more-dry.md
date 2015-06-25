---
layout: post
title: Webrat Steps extension (Be more DRY)
date: '2009-12-03T19:04:00+05:30'
tags:
- rails BDD
- webrat
tumblr_url: http://bagwanpankaj.com/post/29191547127/webrat-steps-extension-be-more-dry
---

Recently when I was working with Cucumber and Webrat, I found default webrat definition very interesting. Even in some case I didn’t even had to write a single step definition. But while proceeding I found that something is missing from webrat definition. So I decided to extend it. And come up with some methods defined as below. To use them just download this file and put it under features/step_definitions/ You can copy below code clipboard.

<script src="https://gist.github.com/bagwanpankaj/630815.js"></script>

Now you can use above listed methods easily and I assure you that if you use them properly you do not have to write a single step definition. Their uses can be found against USE in the downloaded file. “Use the Rails the way Rails is” 

Happy Boarding :)
