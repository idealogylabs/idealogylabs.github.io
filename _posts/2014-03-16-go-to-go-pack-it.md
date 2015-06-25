---
layout: post
title: Go to Go - Packages
tags:
- go
- language
- packeage
---

Go is modern language, so it has to take care of current software development practices; code reuse or DRY (Don't Repeat Yourself) being one of them. In go code can be packed into modules and shipped. Lets look into how go uses packages.

##### Importing a Packages

A go package can be imported using `import` command, like we see in daily uses.

{% highlight go %}
//importing one file
import "xyz"

//importing multiple packages at once

import(
  "abc"
  "xyz"
)
{% endhighlight %}

##### Creating a Package

To create a package, first we need to create a folder somewhere under our `GO_PATH/src` directory with the same name as package, that we want to declare. Let us create a `math` package under `github.com/go_to_go/pack_it`

{% highlight bash %}
#first cd into it 
cd $GO_PATH/src/github.com/go_to_go/pack_it

#create a folder with same name as our package
mkdir math
cd math
touch math.go
{% endhighlight %}

Now open this file `math.go` and create an Avarage method

{% highlight go %}
package math

func Average(elem []int64) int64 {
  total := int64(0)
  for _, x := range elem {
    total += x
  }
  return total / int64(len(elem))
}
{% endhighlight %}

Note method name starts from capital letter, in Go, only methods, whose name starting from capital letter are imported, not others.

Now to make it package, we need to install it. run `go install` in `math` directory. This will create a `math.a` file under `$GO_PATH/pkg/github.com/go_to_go/pack_it`; verify same.

Now `cd` to `$GO_PATH/src/github.com/go_to_go/pack_it` and create a `pack.go` to use this package

{% highlight go %}
package main

import(
  "github.com/go_to_go/pack_it/math"
  "fmt"
)

func main() {
  arr := []int64{8,6,4,2}
  average := math.Average(arr)
  fmt.Println(average)
}
{% endhighlight %}

That's it.

