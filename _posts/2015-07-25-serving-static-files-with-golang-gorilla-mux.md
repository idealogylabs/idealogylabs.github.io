---
layout: post
title:  Serving static files with golang or gorilla mux
date:   2015-07-24 15:07:00
category: golang
tags: 
  - golang 
  - interface 
author:  Pankaj B
---

Today, we are going to demonstrate how one could serve static site/ content using golang's `net/http` or using `gorilla/mux`. Let us create base for this. First we would create a directory

{% highlight bash %}
mkdir my-static-site
cd my-static-site
{% endhighlight %}

Now lets bootstrap our project by puting in some example files

{% highlight bash %}
touch http_ex.go
mkdir assets
mkdir assets/css
touch assets/index.html
touch assets/css/application.css
{% endhighlight %}

Now let us put in some stuff in `assets/index.html`

{% highlight html %}
<!doctype html>
<html>
  <head>
    <title>Serving static files using go</title>
    <link rel="stylesheet" href="/assets/css/application.css">
  </head>
  <body>
    <h1>Lorem Ipsum sit amet</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta sem in tellus lacinia, vitae  gravida ex lobortis. Pellentesque quam enim, egestas sit amet mauris a, auctor luctus mauris. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Fusce mattis bibendum massa, in mattis tellus pulvinar at. Sed fermentum, orci sit amet facilisis ultrices, sapien felis aliquam justo, a sodales ante mi vel risus. Mauris non varius justo. Aliquam ultricies pharetra magna, ac porttitor lorem venenatis nec. Sed scelerisque eleifend efficitur. Phasellus sollicitudin odio at odio dapibus sagittis. Vestibulum sem libero, consectetur ut lorem eu, rhoncus tristique dolor. Nullam dui ex, blandit a euismod id, vestibulum sit amet libero.
    </p>
    <p>
      Sed suscipit, magna a sollicitudin posuere, massa urna hendrerit tortor, ac rutrum risus turpis quis velit. Morbi lobortis tellus sed massa finibus rhoncus. Vivamus vel tellus metus. Donec ultrices nec turpis quis lacinia. Integer vitae nibh a ligula tincidunt mollis ultricies nec tortor. Morbi ullamcorper laoreet lorem, sed dictum libero pharetra nec. Morbi id orci eu massa blandit iaculis.
    </p>
  </body>
</html>
{% endhighlight %}

Put in some content in `assets/css/application.css` as well

{% highlight css %}
h1{
  color: #555;
}
p{
  text-align: right;
}
{% endhighlight %}

Okay, so we are done with our example static site, now we need to serve this using golang `http` package found at net/http. Put code as mentioned below in `http_ex.go`

{% highlight go %}
// file http_ex.go
package main

import (
  "log"
  "net/http"
)

func main() {
  assets := http.StripPrefix("/", http.FileServer(http.Dir("assets/")))
  http.Handle("/", assets)

  log.Println("Listening at port 3000")
  log.Fatal(http.ListenAndServe(":3000", nil))
}
{% endhighlight %}

So what we did here is mounted our filesystem at root path `/`, calling `http.StripPrefix` was not necessary here but, it becomes necessary when we deploy it at subpath like `assets`. No sit back and 
fire `go run http_ex.go` and browse [localhost:3000](http://localhost:3000)

All done, now to to same using [gorilla/mux](http://www.gorillatoolkit.org/pkg/mux), we would touch upon a new file `mux_ex.go`. Content of the file would look like

{% highlight go %}
// file mux_ex.go
package main

import (
  "log"
  "net/http"
  "github.com/gorilla/mux"
)

func main() {
  r := mux.NewRouter()
  r.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir("assets/")))) 

  log.Println("Listening at port 3000")
  http.ListenAndServe(":3000", r)
}
{% endhighlight %}

Again `PathPrefix` was not required here but it would, when one would like to deploy on subpath like `/blog`

Entire codebase for this post can be found on [github](https://github.com/idealogylabs/gostatic-site)

Have comments, pass on to @idealogylabs on twitter


