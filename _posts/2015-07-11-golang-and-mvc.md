---
layout: post
title:  Go lang and MVC
date:   2015-07-11 09:27:30
category: golang
tags: 
  - golang 
  - martini 
  - mvc
author: Pankaj B
---

Its been long since working with go language, been awesome experience so far. This post is regarding how one can structure go application in MVC structure like Rails. This example would be using [Martini](https://github.com/go-martini/martini) and [Gorm](https://github.com/jinzhu/gorm), for demonstration purpose only.

So, to start we would have application directory structure contaning

**1.) config:** config folder will contain all config files as needed and/or migrations

**2.) models:** models will contain all models referencing to their counterpart in database tables

**3.) controllers:** as usual this will contain all controllers 

**4.) templates:** all templates will go to this directory, though this cane be named as views.

**5.) server.go:** this file will contain main function and routing, though routing can also be moved to seperate file.


Now what we would be developing, is a activity model named `models/activity.go` packaged as `models`, here is snippet of same

{% highlight go %}
//models/activity.go
package models

import(
  "time"
  "github.com/jinzhu/gorm"
  _ "github.com/go-sql-driver/mysql"
)

type Activity struct {
  ID        uint `gorm:"primary_key" form:"id"`
  CreatedAt time.Time
  UpdatedAt time.Time
  DeletedAt *time.Time
  Title string `form:"title" binding:"required"`
  Description string `form:"description"`
  City string `form:"city" binding:"required"`
  Address string `form:"address"`
  Contact string `form:"contact"`
}

{% endhighlight %} 

but wait, we could move fields common for all models into seperate generic model, here is how it looks after 

{% highlight go %}
//models/model.go
package models
import(
  "time"
  "github.com/jinzhu/gorm"
  _ "github.com/go-sql-driver/mysql"
)
type Model struct {
    ID        uint `gorm:"primary_key" form:"id"`
    CreatedAt time.Time
    UpdatedAt time.Time
    DeletedAt *time.Time
}
{% endhighlight %} 

and our beloved `activity.go`

{% highlight go %}
//models/activity.go
package models

import(
  "github.com/jinzhu/gorm"
  _ "github.com/go-sql-driver/mysql"
)

type Activity struct {
  gorm.Model // this will include attributes defined in model.go
  Title string `form:"title" binding:"required"`
  Description string `form:"description"`
  City string `form:"city" binding:"required"`
  Address string `form:"address"`
  Contact string `form:"contact"`
}

{% endhighlight %} 

Now `Activity` can be referred as `models.Activity` wherever needed (but of-course we need to import it)

Next we would first look into our `server.go` file contaning main function for our app, Here is how it looks

{% highlight go %}
package main

import(
  "log"
  "github.com/go-martini/martini"
  "github.com/codegangsta/martini-contrib/render"
  "github.com/martini-contrib/binding"
  "github.com/martini-contrib/auth"
  "github.com/jinzhu/gorm"
  _ "github.com/go-sql-driver/mysql"
  // Local Packages
  "./controllers"  // Don't worry about it now
  "./models"
)
func checkErr(err error, message string){
  if err != nil{
    log.Fatal(message)
  }
}

func main(){
  db, err := gorm.Open("mysql", "<user>:<pass>@/mvc_demo?charset=utf8&parseTime=True&loc=Local")
  checkErr(err, "Database connection failed");
  m := martini.Classic()
  m.Map(&db)
  m.Use(render.Renderer(render.Options{
    Layout: "layout",
  }))
  m.Get("/", func() string {
      return "Welcome to ActivityApp"
    })
  m.Group("/activities", func(r martini.Router) {
    r.Get("/", controllers.IndexActivities)
    r.Get("/new", controllers.NewActivity)
    r.Post("/", binding.Bind(models.Activity{}), controllers.CreateActivity)
    r.Get("/:id/edit", controllers.EditActivity)
    r.Post("/:id", controllers.UpdateActivity)
    r.Get("/:id", controllers.ShowActivity)
    r.Get("/:id/delete", controllers.DeleteActivity)
  })

  m.Run()
}
{% endhighlight %} 

So what we are doing here is to import relevent packages as needed. Map `gorm.DB` to martini context and declare routing. Do not worry about what `controllers.IndexActivities` would be doing. We would come to that next.

Next, we need to define out activities controller as `controllers/activities` under controllers package.
Here is how our activities controller looks like

{% highlight go %}

package controllers

import(
  "net/http"
  "fmt"
  "log"
  "github.com/go-martini/martini"
  "github.com/codegangsta/martini-contrib/render"
  "github.com/jinzhu/gorm"
  _ "github.com/go-sql-driver/mysql"
  "../models"
)

func IndexActivities(render render.Render, db *gorm.DB){
  activities := []models.Activity{}
  db.Find(&activities)
  fmt.Printf("%+v\n", activities)
  render.HTML(200, "activities/index", activities)
}

func ShowActivity(params martini.Params, render render.Render, db *gorm.DB){
  activity := models.Activity{}
  db.First(&activity, params["id"])
  render.HTML(200, "activities/show", activity)
}

func NewActivity(render render.Render){
  render.HTML(200, "activities/new", models.Activity{})
}

func EditActivity(params martini.Params, render render.Render, db *gorm.DB){
  activity := models.Activity{}
  db.First(&activity, params["id"])
  render.HTML(200, "activities/edit", activity)
}

func CreateActivity(params martini.Params, render render.Render, activity models.Activity, db *gorm.DB) {
  db.Save(&activity)
  render.Redirect("/activities/" + string(activity.ID), 302)
}

func UpdateActivity(params martini.Params, render render.Render, activity_updated models.Activity, db *gorm.DB) {
  activity := models.Activity{}
  db.First(&activity, params["id"])
  db.Model(&activity).Updates(activity_updated)
  render.Redirect("/activities/" + string(params["id"]), 302)
}

func DeleteActivity(params martini.Params, render render.Render, db *gorm.DB){
  db.Delete(models.Activity{}, params["id"])
  render.Redirect("/activities/", 302)
}

{% endhighlight %} 

Just to wrap it up, we could define our migrations under `config/migrations.go`, here is how would that looks like

{% highlight go %}
package main
import (
  "github.com/jinzhu/gorm"
  _ "github.com/go-sql-driver/mysql"
  "../models"
)

func main(){
  db, _ := gorm.Open("mysql", "<user>:<pass>@/mvc_demo?charset=utf8&parseTime=True&loc=Local")
  // Create table
  db.CreateTable(&models.Activity{})
}

{% endhighlight %} 

That's it. Have a happy going with go. Drop you suggestions and opinions at [@idealogylabs](http://twitter.com/idealogylabs) on twitter, [@idealogylabs](http://facebook.com/idealogylabs)

