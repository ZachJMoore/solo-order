# Youngling - Solo Order

The Solo Order is a program for encouraging employees to continue personal growth and learning.

## Learning

The youngling segment covers reading "The Lean Startup", the basics of Sequelize, and getting started with docker and how it works

### The Lean Startup

This book dives deep into the ideas and outcomes behind A/B testing, minimum viable products, validated learning, and many examples you can utilize to grow a startup or know when to pivot.

What does A/B testing, MVPS, and validated learning have in common? They follow a build, measure, and learn loop. The more quickly you can build and publish, the more quickly you can collect statistics and decide if the features or products you are building are valuable to your customers.

Consider the success or failure of a product/feature to be a data point: if it takes us one year to release a fully featured product and we follow no form of MVP or continuous learning, we end up with no more than one data point upon release and must wait to see the results of our hard work in users hands. However, if we instead decided to only build the minimal amount and release it monthly, weekly, or even daily, we can rapidly increase both the number of our data points and the amount of learning.

The Lean Startup demonstrates that we should 1) hypothesize what we expect the results to be, 2) use the least amount of effort to build a testable product or feature, 3) and then run tests on the users to measure our results. This should be a continuous loop deciding at each interval whether to continue due to success, persevere in uncertainty, or pivot when not meeting the expected outcome.

### Sequelize

Covered in this segment is the basic usage of getting setup with Sequelize, running queries using it, and building relations between tables. A simple application `apps/express` is built out that has playlists and songs which are queried using a junction table. Fetching `api/playlists` filters and returns each playlist with all the associated songs. A playlist can have many songs and a single song might be in many playlists.

### Docker

Docker and Docker Compose was used to set up a development environment for quickly testing and working alongside the learning material.

Docker itself is a containerization software that provides a way to consistently run software on different kinds of machines without worrying as much about the underlying dependencies. Docker, rather than running many individual VMs, uses the underlying kernel which increases the performance of the system as a whole. When combined with things like Docker Compose, Docker Swarm, or K8s, can be used to create an easily scalable system of services to provide load balancing, scaling, and redundancy with minimal downtime.
