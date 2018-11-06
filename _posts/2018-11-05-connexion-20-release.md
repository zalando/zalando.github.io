---
title: Connexion 2.0 Release
author: João Santos
date: 2018-11-05
banner:
  image: connected.jpg
---

Today we released [Connexion](https://github.com/zalando/connexion) 2.0 with OpenAPI 3 support.

Connexion is a Python framework that automagically handles HTTP requests based on [OpenAPI Specification](https://www.openapis.org/)
(formerly known as Swagger Spec) of your API described in YAML format. Connexion allows you to write a Swagger specification,
then maps the endpoints to your Python functions.

Besides routing, Connexion also validates requests and responses automatically based on OpenAPI specifications, handles common
authentication schemes, supports API versioning and supports automatic serialization of payloads. It can use both
[Flask](http://flask.pocoo.org/) and [aiohttp](https://github.com/aio-libs/aiohttp) as backend servers.

Besides OpenAPI 3 support, this release includes a more streamlined internal structure, better adherence to Swagger 2.0 spec by
default, and support for basic authentication and apikey authentication. For a more detailed list of changes, check
[Connexion's Read Me](https://github.com/zalando/connexion/#new-in-connexion-20).

Connexion 2.0 would not have been possible without the help of all our 87
[contributors](https://github.com/zalando/connexion/graphs/contributors), specially our newest maintainer
[Daniel Grossmann-Kavanagh](https://me.dtkav.com/), who deserves most of the credit for this release.
