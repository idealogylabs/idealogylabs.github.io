---
layout: post
title:  Go waitgroup with goroutines
date:   2015-07-18 15:07:00
category: golang
tags: 
  - golang 
  - waitgroup 
  - goroutines
author: Pankaj B
---

Previously we [talked](/blog/golang/2014/03/15/go-to-go-concurrency.html) about how goroutines in Go language works. Today we will focus on providing robustness to our previous talk by using semaphores from [sync](http://golang.org/pkg/sync/#WaitGroup) package.

Here is redone example from our previous blogpost

{% highlight go %}

package main 

import(
  "fmt"
  "time"
  "math/rand"
  "sync"
)

var wait sync.WaitGroup // This assign a WaitGroup, to be used later

func Printer(a int){
  defer wait.Done() // Done signals that this gorutine is done doing work, decrementing semaphore counter
  time.Sleep(time.Millisecond * time.Duration(rand.Intn(100)))
  fmt.Println("a is: ", a)
}

func main(){
  max_routine := 10
  wait.Add(max_routine) // This adds maximum counter to waithgroup should wait before terminating main program
  fmt.Println("At start")
  for i := 0; i < max_routine; i++ {
    fmt.Println("Sending to routine: ", i)
    go Printer(i)
  }
  wait.Wait() // This waits for semaphore counter to be 0 and then terminates current program
  fmt.Println("At end!")
}

// time.Duration(rand.Intn(100)) will make goroutine sleep for varying time
//At the start
//Sending to routine:  0
//Sending to routine:  1
//Sending to routine:  2
//Sending to routine:  3
//Sending to routine:  4
//Sending to routine:  5
//Sending to routine:  6
//Sending to routine:  7
//Sending to routine:  8
//Sending to routine:  9
//a is:  9
//a is:  5
//a is:  6
//a is:  7
//a is:  2
//a is:  8
//a is:  3
//a is:  0
//a is:  4
//a is:  1
//
//At the end!
{% endhighlight %}

Results may vary from machine to machine as. But in essence what we did is, we imported `sync` package. `sync` package contains `WaitGroup` type, we declared variable `wait` to be of WaitGroup type. `Waitgroup` provides three methods namely `Add`, `Done` and `Wait`.

1.) `Add` method takes integer as a parameter delta to the counter, and once counter becomes zero, all blocking goroutines, waiting onto counter would be released. We provided no of goroutines we are going to wait upon

2.) `Wait` methods waits for semaphore counter to become zero, before releasing goroutines, waiting onto other goroutines to terminate/finish. Our main program is waiting for other goroutines to finish.

3.) `Done` method basically indicates that current goroutine, in which this is being called is done/finished, while decrementing semaphore counter. Our goroutines calls to `Done` method indicating that goroutine is done executing its task.

Happy Going!

We welcome your comments/appreciation/critisism at @idealogylabs on twitter