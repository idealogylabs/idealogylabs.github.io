---
layout: post
title:  "Introducing Event Server"
date:   2014-03-03 20:10:14
tags:   ["otp", "behaviour", "elixir", "erlang", "event"]
---

So very first behaviour server of OTP that we are gonna look in is Generic(I am guessing what gen means in erlang) event server.

Okay Jack! first we look at, as how a event server should look like. Event server are abled to 

1.) receive certain event they are bind to,  
2.) notify listner bound/subscribed to those events/listner (or client) should consume those event as and when they happen.  

That's it! To understand this behaviour we will build a broadcast event server. 

{% highlight elixir %}
defmodule BroadcastEventHandler do
  use GenEvent.Behaviour

  def init(_) do
    { :ok, [] }
  end

  def handle_event({:broadcast, x}, broadcasts) do
    { :ok, [ x | broadcasts ] }
  end

  def handle_call(:broadcasts, broadcasts) do
    {:ok, broadcasts, []}
  end
end
{% endhighlight %}

This is it. We defined out intial version of broadcast server. It has two method apart from intializer. One to receive published event, another one to list all event that happened since last conversation with subscriber.

Jack is dying to use it. Let's look how to use it

1.) We need to initiate a `gen_event` server. This will return tuple of `{:ok, pid}` as a response  

{% highlight elixir %}
#initiate a gen_event server
{:ok, pid} = :gen_event.start_link
{% endhighlight %}

Since we can not directly call or initiate our broadcast handler, we need to register it with event server

{% highlight elixir %}
#add hadler to it 
:gen_event.add_handler(pid, BroadcastEventHandler, [])
{% endhighlight %}

Now our broadcast handler is up and running and ready to receive broadcast messages

{% highlight elixir %}
:gen_event.notify(pid, {:broadcast, "I dare you!"})
:gen_event.notify(pid, {:broadcast, "Meetup at 10 o'clock"}) 
{% endhighlight %}

So we published two messages to broadcast handler, lets see if it serves them well.

{% highlight elixir %}
:gen_event.call(pid, BroadcastEventHandler, :broadcasts)
#=> ["Meetup at 10 o'clock", "I dare you!"]

:gen_event.call(pid, BroadcastEventHandler, :broadcasts)
#=> []
{% endhighlight %}

Well done boy! It only served them once, when we called again, it returned empty array, as messages were already consumed. Lets do one more round.

{% highlight elixir %}
:gen_event.notify(pid, {:broadcast, "Assemble in class"})
:gen_event.call(pid, BroadcastEventHandler, :broadcasts)
#=> ["Assemble in class"]
{% endhighlight %}

Great going Jack!