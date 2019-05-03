---
title: March Updates -  A new Kubernetes operator & more Cloud Native Apps. 
author: Hong Phuc Dang 
date: 2019-04-25
banner:
  image: mar-banner.jpg
---
### This is a recap of open source activities and development at Zalando in the month of March

## Project Highlights 

A new operator is added to Zalando’s list of Cloud Native Applications.  [Elasticsearch Operator](https://github.com/zalando-incubator/es-operator) - an operator for running Elasticsearch in Kubernetes with focus on operational aspects, like safe draining and offering auto-scaling capabilities for Elasticsearch data nodes, rather than just abstracting manifest definitions.

To make things even simpler for developers, we also released a new framework that helps to build Kubernetes operators in Python. [Kopf - Kubernetes Operator Pythonic Framework](https://github.com/zalando-incubator/kopf) - a  framework and a library to make Kubernetes operators development easier, just in few lines of Python code. The main goal is to bring the Domain-Driven Design to the infrastructure level, with Kubernetes being an orchestrator/database of the domain objects (custom resources), and the operators containing the domain logic (with no or minimal infrastructure logic).

**Dedicated Open Source Time In The Zalando Cloud Infrastructure Team** The engineering team led by [Jannis Rake-Revelant](https://twitter.com/jannis_r), who is responsible for some our most popular open source projects have, since the beginning of the year, dedicated 20% of their time to ensure their open source projects are actively maintained and improved.  As a company we believe it is important to take long term responsibility and show commitment to the open source community which we benefit from every day.
 
## Zalando Around The World 
Meet and connect with Zalando representatives at tech events around the world: 

[GAIA Conference](https://www.gaia.fish), Göteborg, Apr 9: Mikio Braun - our AI expert - gave a keynote on Putting Data Science into Production. Check out his talk below: 

<iframe width="800" height="590" src="https://www.youtube.com/embed/jePTtEFBgLI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

--

[Strata Conference](https://conferences.oreilly.com/strata/strata-eu), London, Apr 29 - May 2: Dirk Petzoldt - Head of Engineering will share how Zalando handles big data in our online marketing platform. [More details](https://conferences.oreilly.com/strata/strata-eu/public/schedule/detail/74071)

[Coding Serbia Conference](https://codingserbia.com), Novi Sad, May 15 - 17: [Luis Mineiro](https://de.linkedin.com/in/lmineiro) - Senior Site Reliability Engineer,  will explain how we set up monitoring and alerting at Zalando and go over the basic concepts of Distributed Tracing and OpenTracing. 

[GitHub Satellite](https://githubsatellite.com/), Berlin, May 22 - 23: [Per Ploug](https://www.linkedin.com/in/per-ploug-krogslund/) - Open Source Manager,  will talk about Open Source and security and try to answer the question: who is actually responsible for the security of open source dependencies?. 

![luis](/assets/img/codingserbia.jpeg)

# More reading
- [How we measure delivery performance at Zalando](https://srcco.de/posts/accelerate-software-delivery-performance.html)
 
- [Zalando Open Source: February Updates](https://opensource.zalando.com/blog/2019/03/feb-updates)

- [Zalando Open Source Documentation](https://opensource.zalando.com/docs)

- [The Tech Radar: Zalando selection of technology choices](https://opensource.zalando.com/tech-radar/)



