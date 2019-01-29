---
title: Nakadi Goes to FOSDEM.
author: Lionel Montrieux
date: 2019-01-29
banner:
  image: nakadi-logo.png
---
[**Nakadi**](https://nakadi.io) is Zalando’s open source event streaming platform. It is based on Apache Kafka. It started as a simple HTTP proxy, providing a REST interface to publish and consume JSON messages. It quickly evolved, with the addition of schema validation and evolution, self-service authorization, a subscription API for easy consumption, deep integration with Zalando’s infrastructure, a SQL-over-streams engine, and much more. It has now become a real platform for event streaming, and plays an essential role in Zalando’s architecture.

Nakadi is meant to be simple to use, and self-service. With [**Nakadi-UI**](https://github.com/zalando-nakadi/nakadi-ui), our open source web interface, users can create and manage resources such as event types, subscriptions, and SQL queries, by themselves. They can even inspect the contents of their event types, publish events, and get access to monitoring and alerting tools so they can keep on top of the health of their streams. Nakadi-UI is written in Elm, and it is probably one of the largest open source projects in that language.

![Nakadi UI](/assets/img/nakadi-ui.png)
Fig. 1: A view of an event type and its schema in Nakadi-UI

The Nakadi community has come up with a collection of great client libraries for the most used languages inside Zalando - Java, Scala, Python, and Golang. You can find Nakadi-UI, and all the community projects on [https://github.com/zalando-nakadi](https://github.com/zalando-nakadi). And Nakadi, its code and documentation, on [https://nakadi.io](https://nakadi.io). Head to the Nakadi-UI repository to get started right away with Docker-compose: you’ll get a local deployment of Nakadi and nakadi-UI with all their dependencies to play with.

At Zalando, we have been running Nakadi in production for over 3 years. These days, it handles over 100 TB of data every day. It is used by over a hundred teams daily, yet it is entirely maintained by a small team of 8 engineers. Not only do we develop and maintain Nakadi, but we also operate Zalando’s internal deployments, take care of operations, user support, 24x7 incident response, documentation, and much more.

This Sunday, at [**FOSDEM**](https://fosdem.org), we will show how we manage to do all this - and still find time to write code. Join us at [**12:15**](https://fosdem.org/2019/schedule/event/nakadi/) in the [HPC, Big Data, and Data Science devroom](https://fosdem.org/2019/schedule/track/hpc,_big_data_and_data_science/) for our talk - or grab us in the hallway track during the weekend!
