---
title: February Updates - Release new projects, join Google Summer of Code Program 
author: Hong Phuc Dang 
date: 2019-03-17
banner:
  image: febupdate.jpg
---
### This is a recap of open source activities and development at Zalando in the month of February

--

## Project Highlights 

- [**Kube Metrics Adapter**](https://github.com/zalando-incubator/kube-metrics-adapter) gained community attention as it was featured in a medium post ['Kubernetes autoscaling with Istio metrics'](https://medium.com/google-cloud/kubernetes-autoscaling-with-istio-metrics-76442253a45a). Users provided very positive feedback on the project. Kube Metrics Adapter is currently maintained by Developer Productivity team at Zalando. It is a general purpose metrics adapter for Kubernetes that can collect and serve custom and external metrics for Horizontal Pod Autoscaling.

- [**Introscope**](https://github.com/zalando-incubator/introscope) is a newly released project. It is a babel plugin and a set of tools for delightful unit testing of modern ES6 modules. It allows you to override imports, locals, globals and built-ins (like Date or Math) independently for each unit test by instrumenting your ES6 modules on the fly.

- [**Postgres Operator**](https://github.com/zalando/postgres-operator) is accepted as a mentor organization of Google Summer of Code, a global program focused on bringing more student developers into open source software development. This is the first year we participate in Google Summer of Code with Postgres Operator - a project to create an open-sourced managed Postgresql service for Kubernetes. Students can submit their proposal until April 9 -> [Apply Now](https://summerofcode.withgoogle.com/organizations/5429926902104064/)

![GSoC](/assets/img/gsoc.png)

---

## Cloud Native: Bug squashing night! 
We are inviting users and contributors of Zalando Cloud Native Applications to meet project maintainers at our tech office here in Berlin. We will spend this evening together answering users questions, reviewing pull requests, improving documentations and fixing as many bugs as possible. [Sign up now!](https://www.meetup.com/Zalando-Tech-Events-Berlin/events/259892690)

Participating projects: 
- [Kubernetes on AWS](https://github.com/zalando-incubator/kubernetes-on-aws)
- [Skipper](https://github.com/zalando/skipper)
- [Postgres-operator](https://github.com/zalando/postgres-operator)
- [External-DNS](https://github.com/kubernetes-incubator/external-dns)
- [AWS Ingress Controller](https://github.com/zalando-incubator/kube-ingress-aws-controller)


## Zalando Open Source Around The World 
Meet and connect with Zalando developers and project maintainers at open source events around the world: 

[**KubeCon Europe**](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2019/), Barcelona, May 20 - 23: There are two sessions conducted by  [Henning Jacobs](https://twitter.com/try_except_), Head of Developer Productivity and [Mikkel Larsen](https://github.com/mikkeloscar), Senior Software Engineer. Check out more details below: 

- [Es-operator: Building an Elasticsearch Operator From the Bottom Up](https://kccnceu19.sched.com/event/MPcP/es-operator-building-an-elasticsearch-operator-from-the-bottom-up-mikkel-larsen-zalando-se#): The talk will walk through how the Elasticsearch operator was designed, what problems it solves and how building it from the bottom up allowed getting it in production fast, gather more learnings and later extending the featureset to make it less manual to operate and reducing the cost of the overall infrastructure.

- [Kubernetes Failure Stories and How to Crash Your Clusters](https://kccnceu19.sched.com/event/MPcM/kubernetes-failure-stories-and-how-to-crash-your-clusters-henning-jacobs-zalando-se#): This talk will show Zalando’s approach to Kubernetes provisioning on AWS, operations and developer experience, especially horror stories of operating 100+ clusters, lessons learned from incidents, failures, user reports and general observations. 

[**PostgreSQL Day Italy**](https://2019.pgday.it/en/), Bologna, May 16 - 17: [Dmitry Dolgov](https://twitter.com/erthalion) will speak about ‘[PostgreSQL at low-level](https://2019.pgday.it/en/schedule/#session-37)’. In this session, he will discuss how much impact different knobs and options of the Linux kernel have on PostgreSQL and why, what would happen if you run databases in virtualized environment or inside a container. Dmitry will share experiences of running PostgreSQL inside Kubernetes, show how to see what's going on inside and how to break something spectacularly. 

[**The Microservices & Serverless Conference in Berlin**](http://microxchg.io/2019/index.html), Berlin, Apr 1 - 2: [Oliver Trosien](https://twitter.com/otrosien) and [Mikkel Larsen](https://twitter.com/mikkeloscar) will share how Zalando utilizes Kubernetes to operate large-scale Elasticsearch clusters during their presentation titled 'Operating Elasticsearch in Kubernetes'. 

[**Devops Gathering**](https://devops-gathering.io/), Bochum, Mar 11 - 13: [Henning Jacobs](https://twitter.com/try_except_) conducted a session on ‘Ensuring Kubernetes Cost Efficiency across (many) Clusters’. His talk provided insights on how Zalando approaches this problem with central cost optimizations (e.g. Spot), cost monitoring/alerting, active measures to reduce resource slack, and automated cluster housekeeping. 

<iframe width="800" height="416" src="https://www.youtube.com/embed/4QyecOoPsGU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

# More reading
- [Total DNS outage in Kubernetes cluster](https://github.com/zalando-incubator/kubernetes-on-aws/blob/dev/docs/postmortems/jan-2019-dns-outage.md)
 
- [Zalando Open Source: January Updates](https://opensource.zalando.com/blog/2019/02/jan-updates)

- [Zalando Open Source Documentation](https://opensource.zalando.com/docs)

- [The Tech Radar: Zalando selection of technology choices](https://opensource.zalando.com/tech-radar/)

