---
layout: post
title:  "Introducing OTP"
date:   2014-03-03 10:00:04
tags:   ["otp", "behaviour", elixir, erlang]
---

Erlang system is tried and tested for years and known for fault tolerance, robustness, ditributed operation handling and concurrency. OTP, stands for Open Telecom Platform, even though there is nothing specific about telecom.

OTP defines some behaviours, like Gen Server, Event Server and FSM Server. It also has Supervisor server behaviour as addition to these.

These server does what there name emplies to, supervisor supervises children servers (one of gen, event or fsm), as per given strategies (covered in later posts).

OTP consists bunch of pattern, necessary to build concurrent application as we have seen so far. This pattern consist of (but not limited to)

1.) A function that spawns a process
2.) Intiating server by giving it's intiali values and/or states
3.) A loop for interaction thereafter
4.) existing/shutting down server

In next few posts we will be covering each of those behaviour one by one.