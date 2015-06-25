---
layout: post
title: Action Mailer Configuration for Google app or Gmail
date: '2009-12-23T15:34:00+05:30'
tags:
- Actionmailer
- Configuration
- Rails
- SMTP
tumblr_url: http://bagwanpankaj.com/post/29191569102/action-mailer-configuration-for-google-app-or-gmail
---
Recently I needed to setup smtp server to send mail. nothing was new, I simply used rails ActionMailer as one should be. It should have been working, but wait; ohhhhhh snap, it was not!

It came out to be our very own google’s fault. Yes! as the email server was hosted on google app. And our google uses SSL SMTP or to be precise STARTTLS for routing emails. So here I am writing down step by step, what worked for me.

1.) Create #{RAILS_ROOT}/config/mailer_settings.yml with following code  

<script src="https://gist.github.com/bagwanpankaj/633886.js?file=gmail_action_mailer_conf.yml"></script>

Note: you can use enable_starttls_auto directly if your rails version > 2.2 and rubyversion is >=1.8.7, because built-in support for starttls. If not, then also you can use it; but you first need to install this gem.

<script src="https://gist.github.com/bagwanpankaj/633886.js?file=smtp_gem.rb"></script>

2.) Load mail configuration settings, if not in test environment  

<script src="https://gist.github.com/bagwanpankaj/633886.js?file=mail_conf_loader.rb"></script>

Happy Boarding ;)
