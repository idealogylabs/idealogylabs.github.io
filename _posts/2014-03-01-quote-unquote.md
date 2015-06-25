---
layout: post
title:  "Quote Unquote"
date:   2014-03-01 21:54:30
tags: quote unquote
---

Most functional languages are great in treating/presenting everything as data.
Elixir is no less, it has power to present anything into data using its powerfull `quote`, `unquote`.

Lets look at what quote does to executables. In essence it differs the execution and present that executable in data form(abstract syntax tree).
Lets dive 

{% highlight elixir %}

differ = quote do
  "This one is " <> "quoted!"
end

{:<>, [context: Elixir, import: Kernel], ["This one is ", "quoted!"]}
{% endhighlight %}

All expressions are represented as three element tuple. Here as we can see, first element `<>` is function or operation that is to be performed, second one is metadat related to, in this case it defines that `<>` is an `Kernal` function and third element contains argument passed.

Now to execute this quoted representation, we need to eval it, here is how

{% highlight elixir %}

Code.eval_quoted(differ)
#=> {"This one is quoted!", []}
{% endhighlight %}

Now we will make this example more complex

{% highlight elixir %}
list = [1,2,3]

differ = quote do
  list |> Enum.map(fn(x) -> x*x end)
end

Code.eval_quoted(differ)

#however this will complain us as below
#** (CompileError) nofile:1: undefined function list/0
#  (elixir) src/elixir_translator.erl:297: :elixir_translator.translate_arg/3

{% endhighlight %}

Why? because quoted representation or abstract sysntax tree need hard values not references, as it packages away all stuff for latter execution. So in this case it can not evaluate list.

To overcome this `elixir` provides us awesome `unquote`. Let's see it in action

{% highlight elixir %}

list = [1,2,3]
  
differ = quote do
  unquote(list) |> Enum.map(fn(x) -> x*x end)
end

Code.eval_quoted(differ)
#will give us expected
#=> {[1, 4, 9], []}

{% endhighlight %}

Happy Coding :)