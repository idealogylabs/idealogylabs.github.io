---
layout: post
title: Indexes do not scale, choose them wisely
tags:
- index
- database
- sql
- nosql
- optimisation
- scaling
categories:
- database
- scaling
---

Indexes are most commonly related to improving database speed, query efficiency and lowering latency. As in wikipedia

>A database index is a data structure that improves the speed of data retrieval operations on a database table at the cost of additional writes and the use of more storage space to maintain the extra copy of data. Indexes are used to quickly locate data without having to search every row in a database table every time a database table is accessed. Indexes can be created using one or more columns of a database table, providing the basis for both rapid random lookups and efficient access of ordered records.

But this is very general observation, indexes can give you hedache as your data grows. This is how?

1.) Indexes does not scale as your data grows

* First, memory is limited and indexes are loaded into memory as soon as you start database instance. As data grows, their would be a point where memory gets exausted.  
* Second, DB writes becomes costlier as data grows vertically(no of rows).Everytime data gets inserted, indexes get adjusted; that means as data grows, it slows down write operation.  

2.) No of indexes invertly related to horizontal scaling

Yes, If one try to index most attributes in given table, one might screw up database in long run. More number of indexes per table means more memory uses and less efficient write operations would be


##### Solution

1.) Do not do early optimisation

Early or premature optimisation is a killer. Do not guess what should be indexed, what not, instead wait and watch and act accordingly

2.) Index wisely

Do consider trade offs while considering an attribute to index. Look for all edge cases. If you are indexing multiple attributes in single table, it is an indication that something is wrong.

__Disclaimer__: This applies to all databases out there, sql or nosql

Happy Indexing :)
