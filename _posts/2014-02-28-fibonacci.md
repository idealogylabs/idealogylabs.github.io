---
layout: post
title:  "First real world example"
date:   2014-02-28 21:54:30
tags: introduction
---

I am not gonna use `hello world` example, because that is too simple and boring as well. So lets start with fibonacci series example.

{% highlight elixir %}

#saved as test_module.ex

defmodule TestModule do

  def fib(0), do: 0
  def fib(1), do: 1

  def fib(n), do: fib(n-1) + fib(n-2)
end

####Uses in iex
# open iex with test_module loaded with
# iex test_module.ex
# TestModule.fib(0) #=> 0
# TestModule.fib(1) #=> 1
# TestModule.fib(10) #=> 55
# TestModule.fib(-10) #=> this will hang as it will recurse for infinite time

{% endhighlight %}

This is our first solution to fibonnaci series. Note the sequence in which 
methods are written, they should always be in sequence that can be matched exactly. If we put `fib(n)` at top, `fib(0)` and `fib(1)` will never be matched. Elixir or more generally erlang provides awsome pattern matching and this is an example of that. Whenever `fib(0)` is called it will match `fib(0)` definition, likewise for others.

But there is a gotcha this program is not safe, try passing negative argument to it, program will hang. So to overcome that we need to guard this program to avaoid negative numbers as parameter. Elixir provides an awsome way to do that as well, called `guards`. Let's rewrite this program to safeguard this from negative numbers.

{% highlight elixir %}
defmodule TestModule do

  def fib(0), do: 0
  def fib(1), do: 1

  def fib(n) when n > 1, do: fib(n-1) + fib(n-2)
end

####Uses in iex
# open iex with test_module loaded with
# iex test_module.ex
# TestModule.fib(0) #=> 0
# TestModule.fib(1) #=> 1
# TestModule.fib(10) #=> 55
# TestModule.fib(-10) 
#=> this will raise error like
#** (FunctionClauseError) no function clause matching in TestModule.fib/1

{% endhighlight %}

*Note:* Execution of fibonacci becomes very slow when number given as input is higher. We will see improved version of it in coming posts.

To make it faster we can cache old summation and just add the new one to it. Let's look how?

{% highlight elixir %}
defmodule TestModule do
  def fib(0), do: 0
  def fib(1), do: 1
  def fib(2), do: 1 #just caching one more

  def fib(n) do
    fib(n, 1, 1)
  end

  defp fib(3, previous, current) do
    current + previous
  end

  defp fib(n, previous, current) do
    fib(n - 1, current, previous + current)
  end
end
{% endhighlight %}

Happy Coding :)