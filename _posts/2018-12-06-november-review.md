---
title: November Review - Maintainer training, new releases and more. 
author: Hong Phuc Dang 
date: 2018-12-06
banner:
  image: nov-review.jpg
---
This is a recap of open source activities and development at Zalando in the month of November

# Project Highlights 

[**ExternalDNS version 0.5.9**](https://github.com/kubernetes-incubator/external-dns) is ready for testing. This project allows you to control DNS records dynamically via Kubernetes resources in a DNS provider-agnostic way. ExternalDNS also successfully made its way to [the Kubernetes Incubator](https://github.com/kubernetes-incubator). Check out [the list of changes in this new release.](https://github.com/kubernetes-incubator/external-dns/releases/tag/v0.5.9)

[**Zalando-Incubator**](https://github.com/zalando-incubator) welcomed two brand new open source projects [1) Darty](https://github.com/zalando-incubator/darty) - a data dependency manager for data science projects. It helps to share data across projects and control data versions and [2) opentracing-sqs-java](https://github.com/zalando-incubator/opentracing-sqs-java) as the name explained itself, this is a Java utility library for simplifying instrumentation of [SQS](https://github.com/zalando-incubator/opentracing-sqs-java) messages with [OpenTracing](http://opentracing.io). 

[**Skipper**](https://github.com/zalando/skipper) announced another new release this month. 1,400 commits were made since the project was first introduced in 2015. Skipper is an HTTP router and reverse proxy for service composition. It is designed to handle >300k HTTP route definitions with detailed lookup conditions, and flexible augmentation of the request flow with filters. This release includes a number of new features: apiMonitoring, east-west service-to-service API gateway setup in Kubernetes, automatic http redirects in kubernetes ingress controller running in GCP. 


# Inside Zalando Open Source 

[**Maintainer training program is working in progress.**](https://opensource.zalando.com/#os-goals) Early this month, the Open Source team begins to design a new training course for our existing and want-to-be Zalando project maintainers. While Zalando tech is well-known for doing open source in the open, we never stop exploring new ways to improve and scale up our projects across Zalando. This professional training initiative aims to enhance maintainers’ knowledge around adoption, compliance, community management and sustainability in open source, and thereby ensure they become confident to take full ownership of their open source projects independently. The course is expected to launched in Q1, 2019 and will cover the following topics: 
- Introduction to a maintainer’s multiple roles
- Open source adoption guidelines 
- Process to release open source 
- Compliance
- Advocacy and stewardship 
- Mentorship and coaching

[**Machine Learning meets Fashion.**](https://www.meetup.com/Zalando-Tech-Events-Berlin/events/256912495/) We are inviting researchers, scientists and anyone who is interested in the field of Machine Learning and AI to join our re-imaging fashion journey. We believe only by working together with the community worldwide, we can bring our technologies and the know-how to the next level. Zalando Research team has released a number of publications around the most exciting research topics, such as Deep Learning, Computer Vision and Natural Language Processing, Large Scale Bayesian Inference, Reinforcement Learning and Causality. And we are very proud to share our work with the community by releasing so far 13 research projects in open source with [Flair](https://jobs.zalando.com/tech/blog/zalando-research-releases-flair/) - a natural language processing library as the most recent one. 

<iframe width="800" height="567" src="https://www.youtube.com/embed/bgDDfqB5iHM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
-- *Zalando Research Lab*


# Zalando Open Source Around The World 

- **HighLoad Moscow, November 8 - 9** -- Zalando engineers participated in this conference to connected with local developers and Russian tech communities, at the same time, we had three presentations starting with [Valentine Gogichashvili](https://www.linkedin.com/in/valgog) - our Head of Engineering, speaking about data engineering inside Zalando, [Henning Jacobs](https://twitter.com/try_except_) - Head Developer Productivity who gave a lecture on [‘Optimizing Kubernetes Resource Requests’](https://www.slideshare.net/try_except_/optimizing-kubernetes-resource-requestslimits-for-costefficiency-and-latency-highload) and finally [Alexanders Kukushkin](https://github.com/CyberDem0n), our Database Expert, shared his experiences on ‘the migration of a 10 TB PostgreSQL Cluster to AWS’

![highload](/assets/img/highload.jpg)

-- *Henning Jacobs (top), Valentine Gogichashvili (left), Alexanders Kukushkin (right)*


- **Open Source Diversity Meetup Berlin, November 20** -- [Hong Phuc Dang](https://www.linkedin.com/in/hongphucdang/) from Zalando Open Source Team shared her story on ‘what and why’ she started her open source journey in the first place. At Zalando, we are working hard to ensure that inclusion and diversity are firmly embedded in our culture, several incentives were introduced by the [Diversity Guild](https://jobs.zalando.com/en/diversity) such as Women In Leadership, Inclusive Language, Diversity Day etc. Moving forward, we are working on increasing diversity across our open source projects. 


- **CodeMotion Berlin, November 20 - 21** -- [Paul Adams](https://twitter.com/therealpadams), Zalando Open Source Lead, talked about [Adopting Open Source Best Practice for the Enterprise](https://berlin2018.codemotionworld.com/talk-detail/?detail=10425), with specific examples and policies that he and his team implemented inside Zalando. 

![como](/assets/img/como.jpg)

-- *Paul Adams answered questions after his talk.* 



## More reading 
- [Holiday Hack: Machine Learning Meets Fashion Meetup](https://www.meetup.com/Zalando-Tech-Events-Berlin/events/256912495)
- [October review: Hacktoberfest, new releases and more](https://opensource.zalando.com/blog/2018/11/october-updates)
- [Zalando Open Source Documentation](https://opensource.zalando.com/docs)
- [The Tech Radar: Zalando selection of technology choices](https://opensource.zalando.com/tech-radar)
