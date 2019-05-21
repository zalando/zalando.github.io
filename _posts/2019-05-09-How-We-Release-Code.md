---
title: How we release open source projects
author: Per Ploug
date: 2019-05-09
banner:
  image: connected.jpg
---
> Zalando currently have over 200 open source projects on Github and each month there are approximately 2 new projects proposed for publishing as open source.
> Over the years we've refined our release process to ensure that it is easy and transparent to publish projects as open source and that we keep
> our maintainers accountable for the well-being of the projects which they oversee.

This blog post is an attempt at describing how we manage the process of proposing, reviewing and approving projects to become open source code while at the same time ensuring that code we release follow our compliance rules and that the maintainers of the projects are aware of the risks and responsibilities involved.

[Our formal release guidelines are available here](https://opensource.zalando.com/docs/releasing/index/)

## Overview

The process roughly involves 5 steps which takes the project from internal source code, through a review phase to an incubation organisation, which later either results in being graduated into our main organisation or archived as an inactive project due to lack of activity or maintainers: 

1. An internal project is proposed for release by a Zalando engineer
2. The project proposal is reviewed by the internal open source review group
3. If approved, the project is published on the Zalando Incubator on GitHub
4. The project activity and health is monitored by the open source team
5. The project graduates from the incubator and into the main Zalando organisation, or the project is decommissioned and marked as archived.

The part where we monitor projects and decide on whether to keep them or archive them will be outlined in greater detail in a later blogpost. 

## Proposing a new open source project
First step in getting an internal project published on the Zalando Incubator is to apply for publication by filling out a google form and understanding our requirements [which are available here](https://opensource.zalando.com/docs/releasing/index/)

Anyone inside of Zalando can do this and this step serves 2 purposes:

- **To collect information required to publish a project**, such as its current location, who will be maintaining it and the long term plan for maintaining it. 
- **To set expectations for the maintainers**, such as amount of time needed to maintain the project, sign-off from the developers lead and ensuring the project does not require Zalando-specific dependencies.

![Project Release Form](/assets/img/os-release-form.png)

You can see a public version of the [approval form without validation here](https://goo.gl/forms/9C4xlel5DlIK52Xw1).

Questions addressing who have signed-off on the publishing and how many hours the developers have been granted to maintain the project serve as a good way to set expectations, both to the lead who sign off and for the maintainers. To run a sustainable project requires time and resources and we do not expect developers to use their private time, instead granting work time should be part of the conversation. 

We also address the need to have basic project health files in place such as Code of conduct, ways for users to get in touch in case of security issues and to reach out to the maintainers - we provide maintainers with a [boiler-plate set of files](https://github.com/zalando-incubator/new-project) for guidance. We do this for 2 reasons:

1. Ownership of code should be visible to other teams inside Zalando, and to potential audits, beyond ownership, these files also communicate how to contribute, how to report security issues and our code of conduct. 
2. Communication channels should be public, so maintainers of a project must be approachable by external contributors, we do not ever intent to just throw code over the wall, so having clear ways to reach our maintainers is a central part of taking active ownership of code. 


## The Open Source Review Group
When a project is proposed, it is automatically shared on an internal mailing-list which consists of everyone at Zalando currently maintaining an approved project - which is currently a group of around 200 people - this structure allows us to spread the decision making process across many different people and viewpoints. 

![Review Group](/assets/img/review-group.png)


### Discussing the why
The point here is to have as many eyes on the proposal as possible, specifically we are interested in discussing the WHY of releasing a project and the 3 questions below is central in this discussion:

1. Can the project be sustainable?
2. Do Zalando have any value in taking ownership?
3. Does it have any value to anyone outside Zalando?

When source code is released as open source, you are essentially giving away something of value, you are also taking responsibility for spending time and resources on the additional overhead associated with open sourcing. This loss of value and use of resources should be justified. There are multiple ways to look at this, such as:

1. The project contributes positively to the employer branding efforts and supports hiring of tech talent
2. The project helps establish the company as a leader in a certain domain
3. The project will gain features and bugfixes from external community members
4. The maintainer team could gain valuable knowledge through collaborating with external community members

For Zalando we've seen several projects contribute to our employer branding efforts, it is however a byproduct and should not be the main reason for open sourcing. It is ofcourse nice that Zalando is recognised for its Kubernetes ([External-Dns](https://github.com/kubernetes-incubator/external-dns), [Stackset-Controller](https://github.com/zalando-incubator/stackset-controller), [es-operator](https://github.com/zalando-incubator/es-operator), PostGreSQL ([Patroni](https://github.com/zalando/patroni) and [postgres-operator](https://github.com/zalando/postgres-operator) and Machine Learning projects ([Flair](https://github.com/zalandoresearch/flair) and [Fashion-mnist](https://github.com/zalandoresearch/fashion-mnist), but it is a value which is hard to measure the effect of and not a long-term motivator for neither the maintainer or company. 

### Reviwing project quality
Besides discussing the WHY, the open source team looks at compliance-specific areas which could be a blocker for releasing:

1. Do we use dependencies which have incompatible licensing
2. Does the source code contain anything confidential (such as tokens, urls, passwords, etc) 
3. Does the project contain functionality or IP which gives Zalando a competetive advantage (such as the code that powers our search results)
4. Is the project something Zalando would consider trying to patent?

We use a dependency licensing scanning tool, as well as a source code scanner to look for tokens and passwords, to automate this as much as possible.

### Review Meeting
Once a month the review group sits down with the maintainers proposing new projects. Here, the dicussions from the mailing-list will be concluded and a release decision is made. The project is either granted release, rejected, or the maintainers are asked to improve certain aspects of the project before it can be released. Depending on the number of proposals, these decisions are reached in 30-60 minutes and release meetings are set up to formally prepare the files and publish them on Github.com.


## Publishing the source code
Finally, after mailing-list discussions and approval in the monthly meeting, the project is formally released, we have a somewhat specific way of doing this:

1. We only transfer the current state of the repository to github, so we do not include the git history, while having the history would be very valuable to track down decisions for code changes, it is simply too big of a security risk and would require the maintainers to audit all commits.

2. We automatically merge project files with our baseline files, to ensure all repositories have a minimal set of files, these are templated with employee names, emails and github names, so contact info and meta data is consistent. 

3. The project is setup with a dedicated team assigned to it, with the correct branch protection in place and compliance tooling installed by default (we have a bot called [Zincr](https://github.com/zalando-incubator/zincr) for this)


And that is our release process for initially releasing new projects, I hope it gave you an insight into what a company of Zalando's size have to consider before releasing new code and how we have tried to keep the process simple and transparent for the maintainers of our projects. 

In future posts, I will go through how we monitor current projects, how we decide what to keep and what to decommission as the projects evolve.
