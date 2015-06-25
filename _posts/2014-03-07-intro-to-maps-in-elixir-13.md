---
layout: post
title:  Introduction to Maps in Elixir
date:   2014-03-07 21:10:14
tags:
- elixir0.13
- maps
---

Elixir v0.13 has introduced `Maps`, a key value store. Quoting elixir 0.13 docs

>A Dict implementation that works on maps.
>Maps are key-value stores where keys are compared using the match operator (===). Maps can be created with the %{} special form defined in the Kernel.SpecialForms module.

Now just FYI, to use `Maps`, elixir branch `v0.13` needs to be checked out and also we need to use [erlang 17 rc 1](http://www.erlang.org/download/otp_src_17.0-rc1.tar.gz). I am not going into details, but here are some useful information. 

1.) Get and install [erlang 17 rc 1](http://www.erlang.org/download/otp_src_17.0-rc1.tar.gz). One can also use multiple release manager for erlang 

* [kerl](https://github.com/spawngrid/kerl)
* [envirius](https://github.com/ekalinin/envirius)

2.) Get and install `elixir v0.13` like

{% highlight bash %}

git fetch

git checkout v0.13

make clean #needed to clean old bin stuff otherwise there might be some errors

make

#although I dont prefer doing installation, i just copy binaries and use them to use multiple elixir at given time, but if you wish

make install

{% endhighlight %}

###### Defining a map

Let's dive in, roll your sleeves and fire up `iex`

{% highlight elixir %}

Erlang/OTP 17 [RELEASE CANDIDATE 2] [erts-6.0] [source] [64-bit] [smp:2:2] [async-threads:10] [hipe] [kernel-poll:false]

Interactive Elixir (0.13.0-dev) - press Ctrl+C to exit (type h() ENTER for help) 

my_map = %{ name: "pankaj", age: 22, knows: ["a", "b", "c"] }
#=> %{age: 22, knows: ["a", "b", "c"], name: "pankaj"}

{% endhighlight %}

There is one other way to initialize or construct `Map` via `new` method, as explained below

{% highlight elixir %}

Map.new [{ :name, "pankaj"}, { :age, 22 }, { :knows, ["a", "b", "c"] }]
#=>  %{age: 22, knows: ["a", "b", "c"], name: "pankaj"}

#as well as we can define map ruby hash style with =>
my_map = %{ :name => "pankaj", :age => 22, :knows => ["a", "b", "c"] }

{% endhighlight %}

###### Accessing Map

Accessing map is pretty simple, like we see in other language (i.e ruby, javascript)

{% highlight elixir %}
#ruby hash style
my_map[:age]
#=> 22

#other way json style
my_map.name
#=> "pankaj"

#yet another way
Map.get(my_map, :knows)
#=> ["a", "b", "c"]
{% endhighlight %}

Like wise updating, deleting and other operations go by `Dict` style

{% highlight elixir %}
Map.keys(my_map)
#=> [:age, :knows, :name]
Map.values(my_map)
#=> [22, ["a", "b", "c"], "pankaj"]

#updating a value
Map.put(my_map, :age, 21)
#=> %{age: 21, knows: ["a", "b", "c"], name: "pankaj"}

#deleting a value
Map.delete(my_map, :knows)
#=> %{age: 22, name: "pankaj"}
{% endhighlight %}

`Maps` implements most of `Dict` methods, one can look them in [docs](http://elixir-lang.org/docs/master/) 

##### Uses

Maps can be used as data model in `modules` using `defstruct`. Here is how

{% highlight elixir %}
#define a module
defmodule Teenage do
  defstruct name: "", age: 15, knows: ["a", "b", "c"]
end
{% endhighlight %}

We can access it by

{% highlight elixir %}
#accessing struct by
%Teenage{}
#=> %Teenage{age: 15, knows: ["a", "b", "c"], name: ""}

#or by

Teenage.__struct__
#=> %Teenage{age: 15, knows: ["a", "b", "c"], name: ""}
{% endhighlight %}

Manipulating struct are same as `Maps`

{% highlight elixir %}
#accessing
rambo = %Teenage{}
rambo.name
#=>""
rambo.age
#=> 15

#updating
rambo = Map.put(rambo, :name, "Rambo")
#=> %Teenage{age: 15, knows: ["a", "b", "c"], name: "Rambo"}
#Notice we are reassigning rambo and it needs to be done

#getting type of struct

rambo.__struct__
#=> Teenage
{% endhighlight %}


__Disclaimer__: Maps are hot changes, available only in `elixir v0.13`, they might change in future.

elixir programming :)