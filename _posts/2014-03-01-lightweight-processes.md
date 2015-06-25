---
layout: post
title:  "Lightweight Processes and spawning a proess"
date:   2014-03-01 11:54:30
tags: spawn process
---

Erlang is popular because of its lightweight processes, actors and working rightly in distributed system. Elixir brings that on Lets look

{% highlight elixir %}
  #simplest form for spawning a function into erlang process is
  spawn fn -> IO.puts "Hello" end
  #PID<0.79.0>
  #Hello
{% endhighlight %}

spawn just simply spawn a compiler specific process and return PID, for letter communication and control.

A more mature example looks like

{% highlight elixir %}
defmodule Spawn do 
  def greet do
    receive do
      _ -> IO.puts "HELLO"
    end
  end
end

#spawning a process happens with
# spawn <MODULE_NAME>, <method_as_atom>, <params_array>
# pid = spawn Spawn, :greet, []
#=> #PID<0.61.0>
# to message this PID, just run
# send pid, <message> like
# send pid, "welcome"
#=> "welcome"
#=> "HELLO"
{% endhighlight %}

So above example will respond to every message that is sent to it, but only once since it is done with its job. To keep this alive we need to make a recursive call to it. Do not worry about stack overflow as erlang internally does `Tail recursion optimisation`, it discards dead terms. Look [here](http://www.erlang.org/doc/efficiency_guide/myths.html) for details.

{% highlight elixir %}
defmodule Spawn do 
  def greet do
    receive do
      _ -> IO.puts "HELLO"
    end
    greet #keeps this pid alive for receive
  end
end

# pid = spawn Spawn, :greet, []
# send pid, <message> like
# send pid, "welcome"
#=> "welcome"
#=> "HELLO"

#another message will also be received
# send pid, "welcome again"
#=> "welcome again"
#=> "HELLO"
{% endhighlight %}

Program above accepts any message and discard it, returns "HELLO" everytime. We can use elixir's matchers here as well to respond to matched message, lets look

{% highlight elixir %}
defmodule Spawn do 
  def greet do
    receive do
      :greeting -> IO.puts "Welcome"
      :hello -> IO.puts "Hello"
      _ -> IO.puts "I did not get this?"
    end
    greet #keeps this pid alive for receive
  end
end

# pid = spawn Spawn, :greet, []
# send pid, <message> like
# send pid, "welcome"
#=> "welcome"
#=> "HELLO"

#another message will also be received
# send pid, "welcome again"
#=> "welcome again"
#=> "HELLO"
{% endhighlight %}

Now we will implement a router that routes a message to end route through intermediate routers. To implement this we need to implement router module, that just takes a message and route to next in given array of routers.

Let's get started

{% highlight elixir %}

defmodule Router do

  def route do
    receive do
      {[ first | tail ], msg} -> 
        IO.puts "#{inspect self} received: #{msg}!"
        IO.puts "routing to next #{inspect first}"
        send first, {tail, msg}
        route
      {[], msg } -> 
        IO.puts "#{inspect self} Huuray, Got the delivery: #{msg}!"
        IO.puts "I am Exausted! Bye Bye!"
    end
  end
end

{% endhighlight %}

okay so we are done with how our initial router will look like. Now we will implement a messanger, simply put a wrapper that creates router node and send message to very first route, Let's have a look

{% highlight elixir %}

defmodule Messenger do

  def deliver(message) do
    router_one    = spawn Router, :route, []
    router_two    = spawn Router, :route, []
    router_three  = spawn Router, :route, []
    router_four   = spawn Router, :route, []
    router_five   = spawn Router, :route, []
    router_six    = spawn Router, :route, []
    router_seven  = spawn Router, :route, []
    router_eight  = spawn Router, :route, []

    send router_one, { [router_two, router_three, router_four, router_five,
      router_six, router_seven, router_eight], message }
  end
end

{% endhighlight %}

Good stuff so far!. Let's execute and see what happens

{% highlight elixir %}

#give message to the messanger
Messenger.deliver("Top Secret")

#and here is what output looks like

# {[#PID<0.307.0>, #PID<0.308.0>, #PID<0.309.0>, #PID<0.310.0>, #PID<0.311.0>,
# #PID<0.312.0>, #PID<0.313.0>], "Top Secret"}
# #PID<0.306.0> received: Top Secret!
# routing to next #PID<0.307.0>
# #PID<0.307.0> received: Top Secret!
# routing to next #PID<0.308.0>
# #PID<0.308.0> received: Top Secret!
# routing to next #PID<0.309.0>
# #PID<0.309.0> received: Top Secret!
# routing to next #PID<0.310.0>
# #PID<0.310.0> received: Top Secret!
# routing to next #PID<0.311.0>
# #PID<0.311.0> received: Top Secret!
# routing to next #PID<0.312.0>
# #PID<0.312.0> received: Top Secret!
# routing to next #PID<0.313.0>
# #PID<0.313.0> Huuray, Got the message: Top Secret!
# I am Exausted! Bye Bye!

{% endhighlight %}

That's about processes in elixir.

Happy Coding :)