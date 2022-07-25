# Padawan - Solo Order

The Solo Order is a program for encouraging employees to continue personal growth and learning.

## Learning

The padawan segment covers reading "Leadership and Self-Deception", an overview of advanced SQL statements, using NGINX, and getting started with Python.

This project builds off the previous segment.

### Leadership and Self-Deception

Leadership and Self-Deception is a story form book covering ways we can better treat those around us with emphasis on how our mentality or behaviors affect others and how we can become self-deceived.

This book can be summed up in one sentence:
> Don't be a dick
>
> -- <cite>Ben Nelson</cite>

#### The box & getting in it

What is the box? "The box" is simply a reference to a way of thinking and how we treat others. When we are "in the box", we see others through the lens of self-deception and more as objects than actual people. We become more or less blind to the actual needs of others, and they inherently become less important to us. We begin to justify our behavior by blaming or finding the faults in others and might even seek out ways to catch them failing, leaving us just waiting to be angry and presumably justified.

Self-deception boils down to betraying what we know to be true and/or lying to ourselves.

There are many ways to enter the box, but we can easily slip into it whenever we: lie to ourselves, start blaming others, skirt responsibility, need others to be blameworthy, or when we value ourselves higher and consider others as objects with no needs.

#### How we get out

Getting out of the box essentially is the reverse of getting in it. We must be empathetic to others, and see the real needs of the people around us (not as objects). Focusing on others needs and seeing from their point of view will help us get and stay out of the box. 

### SQL

The provided lesson covers ways to make better SQL statements. The lesson was mostly a refresher on different kinds of statements and ways to simplify things like using an IN statement rather than multiple AND statements. However, one technique I had yet to come across was the use of a CASE statement.

#### The case statement

The case statement is similar to an if/else block of code or like the switch statement provided in Javascript.

What can we do with the case statement? The SQL case statement allows us to replace certain column values with other varieties of data when certain criteria are met.

A similar example given in the video is the use of making things more readable: given a hierarchy of different admins, we could set each one to different integers representing a certain level of access. However this may be hard to read or remember and what we could do is use a case statement to swap the integers out for a corresponding text value ("user", "manager", "admin", etc).

Or, we could swap out a value based on being less than or greater than: perhaps a list of individuals with an income column could be replaced with "low", "medium", and "high" earners. The matching would be done based on the income hitting different thresholds. 

### NGINX

NGINX is a load balancer, reverse proxy, and web server. Continuing on the previous code, I set up a docker container running NGINX which uses Docker's internal IP system for proxying the requests through to each server.

Requesting http://localhost:8080/express-server will take us internally to http://express-server:3000/
Requesting http://localhost:8080/express-server-two will take us internally to http://express-server-two:3000/

This allows us to have one place of ingress and load balance between services, as well as a nicer way of dealing with many internal IPs and one external one. 

### Python

This branch also sets up a development playground for python that has a few of the items covered in the course.

Highlights of the learning:
- Python uses white space as syntax
- Python has no implicit coercion
- Python comparatively has a lot more errors thrown than Javascript
- Python is a strongly dynamically typed language
- Python at times is very similar to Javascript
- Numbers in Python have no size limit and are constrained only by the machine running it.
