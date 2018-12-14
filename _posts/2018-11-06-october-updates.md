---
title: October Review - Hacktoberfest, new releases and more. 
author: Hong Phuc Dang 
date: 2018-11-06
banner:
  image: octupdates.jpg
---
# This is a recap of open source activities and development at Zalando in the month of October.

 
## Project Highlights 

- [**Connexion version 2.0**](https://github.com/zalando/connexion) with OpenAPI 3 support is ready, [check out what is new in our latest release!](https://opensource.zalando.com/blog/2018/11/connexion-20-release/) Connexion is the [Swagger/OpenAPI](https://swagger.io) first framework for Python on top of Flask with automatic endpoint validation & OAuth2 support. With 87 active contributors and more than 1,000 repositories that depend on Connexion worldwide makes this project one of the most successful open source releases of Zalando. 

- [**Postgres-Operator**](https://github.com/zalando-incubator/postgres-operator) after one year of development, this operator now manages more than 500 Postgres clusters across a large number of Kubernetes installations inside Zalando. Our engineers do not need to manually configure numerous Kubernetes objects, they just submit a single text file describing the desired Postgres cluster, and the operator takes care of the rest. Postgres-operator was first started by Zalando’s database team to provide a managed PostgreSQL service for Kubernetes. [Try out the operator here!](https://github.com/zalando-incubator/postgres-operator) 

- [**Flair**](https://github.com/zalandoresearch/flair) [Zalando Research](https://research.zalando.com/) recently released a new version of this open source Natural Language Processing framework, it now runs on both Linux and Mac, [click here to test!](https://github.com/zalandoresearch/flair) Flair gives users the ability to tag, classify and understand the meanings of email messages, customer responses, website comments, or any other scenario where users submit text feedback to be automatically classified or otherwise processed.


## Inside Zalando Open Source 
- [**Zalando hosted a Hack Night at the Berlin office to celebrate Hacktoberfest - the month of open source.**](https://github.com/zalando) The main event started with a number of lightning talks by open source projects, followed by a hacking session, where Zalando engineers gathered as teams and worked on challenges under domains of machine learning, database and web plug-ins. Project maintainers were present to support participants completing their very first contribution and pull request.

![Hacktoberfest](/assets/img/hacktoberfest1.jpg)

*Zalando Engineers at Hacktoberfest on Oct 18, 2018*

- **The first Open Source Onboarding Training** was conducted on October 9th as a part of Zalando’s Tech Bootcamp, where we explained to the new joiners the importance of open source at Zalando, how open source fits with Zalando’s culture and the way we work. During this training, we also highlighted the open source journey of a developer and guided people how to contribute to open source projects. 

![Bootcamp](/assets/img/bootcamp1.jpg)

*Open Source Bootcamp's Participants on Oct 9, 2018*

- **Open Source Team released a promotion framework** that helps engineering teams to grow an ecosystem around their open source projects through various outreach and onboarding activities. This framework includes [blogging tips](https://opensource.zalando.com/docs/promoting/write-project-intro-blog/), [utilizing social media](https://opensource.zalando.com/docs/promoting/promotion-channels/), [organizing a release party](https://opensource.zalando.com/docs/promoting/organize-release-party/), and [writing tips for public announcement](https://opensource.zalando.com/docs/promoting/write-announcement-email/). 

## Zalando Open Source Around The World 

- **PostgreSQL Conference Europe, October 23 - 26, 2018**
at the PGConf Europe, [Alexanders Kukushkin](https://github.com/CyberDem0n), Zalando Database Engineer, presented how Zalando migrated one of the largest Postgres clusters to AWS EC2 with [Patroni](https://github.com/zalando/patroni), a template for PostgreSQL High Availability with ZooKeeper, etcd, or Consul.

- **Open Source Summit Europe, October 22 - 24, 2018** our first speaker [Dmitry Dolgov](https://github.com/erthalion), Zalando Software Engineer, delivered a talk on PostgreSQL + Linux Kernel, showing common techniques of configuring the Linux kernel to work efficiently with PostgreSQL. The second speaker, [Per Ploug](https://github.com/perploug), Zalando Open Source Community Manager, gave a presentation on ‘Turning Policy into Tooling’, where he outlined concrete efforts, tools and services that Zalando have developed and uses to remove compliance barriers. Finally, [Zalando InnerSource Manager](https://opensource.zalando.com/blog/2018/08/welcome-innersource-manager/), [Hong Phuc Dang](https://twitter.com/hpdang) spoke on a 'Mentorship Panel' together with Open Source Program Managers of Intel, Google, Bitergia and a researcher from Inria. The discussion covered topics such as value of mentorship, mentorship metrics, challenges and diversity. 

![OSS](/assets/img/oss-hong.jpg)

*Open Source Summit Europe: From left to right 
Julia Lawall, Senior Researcher (Inria) - Josh Simmons, Open Source Program Manager (Google) - Hong Phuc Dang, InnerSource Manager (Zalando) - Jeffrey Osier-Mixon, Open Source Program Manager (Intel)*


- **Github Universe USA, October 16 - 17, 2018** 
Zalando joined Github, Oracle and Comcast on a panel discussion about ‘The keys to open source success for enterprise teams’. 

![GHU](/assets/img/ghu-per.jpg)
 
*Github Universe: From left to right Bonnie Chatterjee, Director, Professional Services (GitHub) - Chad Arimura, Vice President of Serverless (Oracle)  - Shilla Saebi, Open Source Community Lead (Comcast) - Per Ploug, Open Source Community Manager (Zalando)*



<style>
	.banner{
		background-position: bottom !Important; 
	}
</style>
