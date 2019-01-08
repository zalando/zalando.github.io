---
title: December Review -  Patroni, Machine Learning Meetup and more. 
author: Hong Phuc Dang 
date: 2019-01-07
banner:
  image: decreview.jpg
---
This is a recap of open source activities and development at Zalando in the month of December. 

# Project Highlights 

[**Patroni**](https://github.com/zalando/patroni) - one of the most well-known open source projects of Zalando is now deployed as [the Postgres Failover Manager on GitLab.com](https://about.gitlab.com/2018/12/05/availability-postgres-patroni/). Patroni was created a few years back when we needed an automatic failover to manage hundreds of in-house clusters. The project was a fork of [Compose Governor](https://github.com/compose/governor), Patroni quickly overtook the original version and became one of the most widely used template for PostgreSQL High Availability these days. It is also adopted by [IBM Cloud](https://www.ibm.com/blogs/bluemix/2018/09/an-update-on-the-updating-of-ibm-cloud-compose-for-postgresql). Our team at Zalando published a [searchable documentation site](https://patroni.readthedocs.io/en/latest/) to help users get started easily. Do check it out and [join Patroni community](https://github.com/zalando/patroni#community) if you have any question.

Beside Patroni, Zalando also released other PostgreSQL driven projects such as:

- [Spilo](https://github.com/zalando/spilo) a Docker image that provides PostgreSQL and [Patroni](https://github.com/zalando/patroni) bundled together. Spilo makes it simpler to deploy scalable Postgres clusters in a Kubernetes environment, and also do maintenance tasks.

- [PGObserver](https://github.com/zalando/PGObserver), PGObserver is a battle-tested monitoring solution for PostgreSQL databases. The project was originally developed to monitor performance metrics of Zalando's different PostgreSQL clusters. Check out [this article](https://opensource.zalando.com/PGObserver/) for more details.

- [Postgres-operator](https://github.com/zalando-incubator/postgres-operator) is used internally to manage over 500 Postgres clusters across a large number of Kubernetes installations. Learn more about the current development of this project [here](https://opensource.zalando.com/blog/2018/11/postgres-operator/).


# Inside Zalando Open Source 

[**Machine Learning Meetup**](https://www.meetup.com/Zalando-Tech-Events-Berlin/events/256912495/) the Zalando Open Source Guild hosted a Holiday Hack event which brought together 71 researchers, developers and people who are interested in the field of Machine Learning to share knowledge and try out open source framework and solutions developed by Zalando Research and Engineering Teams.

During the event Zalando Open Source Maintainers conducted talks and guided the attendees to complete multiple challenges and hands-on exercises on  two projects 1) [Flair - a natural language processing library](https://github.com/zalandoresearch/flair)  and 2) [Connexion - a Swagger/OpenAPI framework for Python](). 

![holidayhack](/assets/img/holidayhack1.jpg)

_- Holiday Hack 2018, Berlin_

[**Open Source 2018 Year End Report**](https://opensource.zalando.com/docs/reports/2019/january-2019/) it has been an amazing year for open source at Zalando: 25 new projects, 11.239 commits,  5.000 pull requests, with 31% coming from non-employees. We have seen activities, contributions across Zalando repositories throughout the entire year even in the busy holiday month of December. Click [here](https://opensource.zalando.com/docs/reports/2019/january-2019/) to see the full report.
 
![decembercontribution](/assets/img/december1.png)


# Zalando Open Source Around The World 

[**KubeCon, December 10 - 14**](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/) [Alexanders Kukushkin](https://de.linkedin.com/in/cyberdemn), Database Engineer at Zalando, delivered a speech on 'Building your own PostgreSQL-as-a-Service on Kubernetes'. 

<iframe width="800" height="500" src="https://www.youtube.com/embed/G8MnpkbhClc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
_- KubeCon 2018, Seattle_


[**35c3, December 27 - 30**](https://media.ccc.de) a number of Zalandos participated in the 35th Chaos Communication Congress (35C3) - the annual four-day conference on technology, society and utopia organised by the [Chaos Computer Club](https://www.ccc.de/) (CCC). This was a great opportunity for us to meet and connect with developers, tech communities and hackerspaces across Germany and Europe. [Hong Phuc Dang](https://www.linkedin.com/in/hongphucdang), Zalando Open Source Team, had the honor to speak at the Podium on [Feminist Perspectives on Inclusive and Diverse Spaces and Communities](https://youtu.be/NDcwl3n47ak) where she exchanged lessons learned and ideas with other panelists on how to create and sustain more diversity in the tech community.

![35c3](/assets/img/35c31.jpg)

_- 35c3 2018, Leipzig_


# More reading
- [Zalando Open Source: 2018 Year End Report](https://opensource.zalando.com/docs/reports/2019/january-2019/)

- [November review](https://opensource.zalando.com/blog/2018/12/november-review/)

- [Zalando Open Source Documentation](https://opensource.zalando.com/docs)

- [The Tech Radar: Zalando selection of technology choices](https://opensource.zalando.com/tech-radar/)


