---
layout: post
title:  "Introduction to Elixir"
date:   2014-02-25 21:54:30
tags: introduction
---

Elixir is a functional, meta-programming aware language that translates to Erlang VM. It is a dynamic language with flexible syntax and macro support that leverages Erlang's abilities to build concurrent, distributed and fault-tolerant applications with hot code upgrades.

It also makes it easy to bite erlang syntax and macro's (that is in general way tough for people from OO world). So In conclusion we can say that it leverages ruby's expressiveness and erlang's efficient and proven VM; to make developing great application easy.

#### Prequisite

There are no prequisite to run elixir except

1.) Elrang VM, go get yours from [here](http://www.erlang.org/download.html) or by your OS's preferred package manager.

#### Installation

I am not gonna cover these trivial stuff here, as they are already covered [here](http://elixir-lang.org/getting_started/1.html), in detail.

Just FYI, since elixir is still evolving, there are lots of deprication and backward compatibility breakages. So just to be at safe side and on the top, I would recommend to compile from source.

Go get your's and compile it from source.

{% highlight bash %}
git clone git@github.com/elixir-lang/elixir.git

cd elixir/

make clean test

#one can use binaries available in bin/ dir but
#if one need binaries to be installed in bin dir, do

sudo make install
{% endhighlight %}

<!-- more --> 

#### Overview

Erlang is functional language, so is elixir. Variables are immutables, that means a variable can not be mutable in its given scope/visibility.

Some features of elixir language are:

1.) Expression syntax: In Elixir, everything is an expression. if, case, cond, try, unless, receive, and so on are all expressions that result in a value when evaluated. 

2.) Pattern matching: In elixir, values are always matched, if noticed, = syntax is a matcher, not assigner. Any value can be matched against using a syntax similar to.

3.) First-class functions: Functions are values in Elixir, and can be passed to other functions. This feature is at the core of functional programming and is what makes functions like foldl and foldr useful.

4.) Closures: Elixir has full-fledged lexical closures as seen in other functional programming languages, making higher-order operations like map and reduce easy to use.

5.) Records: Records in elixir are more useful and elagent than Erlang.
In Elixir, a record consists of 3 things: A module, a list of attributes, and methods to manipulate attributes. Records have the same tuple representation as in Erlang, but record methods can be called directly on record values.

6.) Protocols: A common problem in Erlang is that extending APIs for new types is close to impossible if the API doesn’t allow passing in functions to handle custom types. In object-oriented languages, interfaces usually solve this problem. In Elixir, protocols can be used to dispatch function calls dynamically based on the type of a value.

7.) Metaprogramming: Instead of Erlang’s C-like preprocessor, Elixir has Lisp-style hygienic macros. Such a macro system is significantly less error-prone and makes AST manipulation at compile-time trivial. In addition, all Elixir code inside macros and in module/record definitions is executed at compile-time making possibilities for code generation practically limitless.
Unicode strings: All strings in Elixir are encoded in UTF-8 as Erlang binaries. Similarly, all functions in the String module assume UTF-8 encoding. Globalization is much less of a pain than in other languages thanks to this.

8.) Immutability: Everything is immutable - more or less. While all data structures are entirely immutable, state can be maintained on a per-process level. Processes also have the so-called process dictionary which can be used to maintain shared state if really necessary. It is generally frowned upon.

9.) Variable rebinding: In Elixir, variables can be rebound to different values, even though everything is immutable. It turns out that this is useful in practice and doesn’t actually violate immutability (single assignment is not immutability). The compiler rewrites a variable rebinding as creating a new version of the variable, effectively transforming code into SSA (static single assignment) form.

10.) Erlang interop: Calling Erlang/OTP functions from Elixir has no overhead and does not look much different from regular function calls. Elixir code can also use behaviors - a feature that helps in writing modules conforming to a certain interface.

#### Getting started

Elixir comes with many goodies. Just to get kicked off, we will be starting by using REPL console comes bundled with elixir. So what are you waiting for got hit the commandline with `iex`

At the time of writing this, I am using `Elixir (0.12.4)`, so the code in this excercise is written and tested against this version.

So lets get started:

{% highlight elixir %}

Erlang R16B01 (erts-5.10.2) [source] [64-bit] [smp:2:2] [async-threads:10] [hipe] [kernel-poll:false] [dtrace]

Interactive Elixir (0.12.4) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)> #To get help or to list usage and doc about a command, pass
iex(2)> #it to h() like
iex(3)> h(Enum)
#will print
#Enum                                      

#Provides a set of algorithms that enumerate over collections according to #the
#Enumerable protocol:

#┃ iex> Enum.map([1, 2, 3], fn(x) -> x * 2 end)
#┃ [2,4,6]

#Some particular types, like dictionaries, yield a specific format on
#enumeration. For dicts, the argument is always a { key, value } tuple:

#┃ iex> dict = HashDict.new [a: 1, b: 2]
#┃ iex> Enum.map(dict, fn { k, v } -> { k, v * 2 } end) |> Enum.sort
#┃ [a: 2, b: 4]

#Note that the functions in the Enum module are eager: they always start #the
#enumeration of the given collection. The Stream module allows lazy #enumeration
#of collections and provides infinite streams.

#Since the majority of the functions in Enum enumerate the whole #collection and
#return a list as result, infinite streams need to be carefully used with #such
#functions, as they can potentially run forever. For example:

#┃ Enum.each Stream.cycle([1,2,3]), &IO.puts(&1)

{% endhighlight %}

Here are list of basic types and their usage, apart from usual types, elixir has some special types as well, like list(or arrays), tuple and atoms

{% highlight elixir %}

:this_is_an_atom #atom

{1,2,3} #tuple

[1,2,3] #list

"string" #string withing double quotes are treated as string and can be interpolated

'string' #string withing single quotes are treated as list of char

#two tabs will list all methods available
{% endhighlight %}

Elixir also has some operators, as 

{% highlight elixir %}
# to operate on or manipulate lists
#++ concatenates lists aka union command

[1,2,3] ++ [5,5] ++ [6,7,8]
#=> [1, 2, 3, 5, 5, 6, 7, 8]

#-- lists aka subtract command
[1,2,3,4,6] -- [5,6,8,1]
#will subtract whatever two list have in common
#=> [2, 3, 4]

#-- string concatenation
"this is a string " <> " here is another"
#=> "this is a string here is another"

{% endhighlight %}

Other operators are: 

{% highlight elixir %}

#boolean operators, first argument has to be 
# boolean (true or false)

and
or
not

#contrary to boolean, below mentioned operator accepts anything, only
#evaluating false or nil to false

&&
||
!

{% endhighlight %}

Happy Coding :)