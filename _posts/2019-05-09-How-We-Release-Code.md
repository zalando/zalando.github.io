---
title: How we release open source projects
author: Per Ploug
date: 2019-05-27
banner:
  image: connected.jpg
---

#### Zalando has over 200 open source projects on Github, with about two new proposed projects a month. Over the years we've refined our process to ensure it is easy and transparent to publish projects as open source, and keep maintainers accountable for the well-being of their projects.

This blog post describes how we manage the process of proposing, reviewing and approving projects to become open source, while at the same time ensuring project code follows our compliance rules, and the maintainers of the projects are aware of their responsibilities.

[Our formal release guidelines are available here](https://opensource.zalando.com/docs/releasing/index/)

## Overview

The process involves five steps that take the project from internal source code, through a review phase to our incubator, which eventually results in the project being graduated into our top level organisation, or archived as an inactive project due to lack of activity or maintainers:

1. An internal project is proposed for release by a Zalando engineer
2. The project proposal is reviewed by the internal open source review group
3. If approved, the project is published on the Zalando Incubator on GitHub
4. The project activity and health is monitored by the open source team
5. The project graduates from the incubator and into the main Zalando organisation, or the project is decommissioned and marked as archived.

How we monitor incubator projects and decide on whether to promote or archive them will be detailed detail in a later blogpost.

## Proposing a new open source project
The first step to getting an internal project published on the Zalando Incubator is to fill out a google form and confirm understanding our requirements, [which is available here](https://opensource.zalando.com/docs/releasing/index/)

Anyone inside of Zalando can do this and this step serves 2 purposes:

1. **To collect information required to publish a project**, such as its current location, who will be maintaining it and the long term plan for maintaining it. 
2. **To set expectations for the maintainers**, such as amount of time needed to maintain the project, sign-off from the developers' engineering lead and ensuring the project does not require internal Zalando dependencies.

![Project Release Form](/assets/img/os-release-form.png)

You can see a public version of the [approval form without validation here](https://goo.gl/forms/9C4xlel5DlIK52Xw1).

Questions addressing who signed-off on publishing the project and how many hours the developers can commit to maintain the project serve as a good way to set expectations, both for the lead who appoved and for the maintainers. To run a sustainable project requires a commitment and we do not expect developers to use their private time—instead ensuring time will be made to work on the project should be part of the conversation.

We also address the need to have basic project health files in place such as a Code of Conduct, ways for users to get in touch in case of security issues, features or bugs, by providing maintainers with a  [standard set of files](https://github.com/zalando-incubator/new-project) for guidance. We do this for 2 reasons:

1. Ownership of code should be visible to other teams inside Zalando, and to potential audits, beyond ownership, these files also communicate how to contribute, how to report security issues and our code of conduct. 
2. Communication channels must be public, so maintainers of a project can be approached by external contributors. We want to avoid the throw code over the wall antipattern, so having clear ways to reach our maintainers is a central part of taking active ownership of code.


## The Open Source Review Group
When a project is proposed, it is automatically shared on an internal mailing-list that consists of everyone at Zalando currently maintaining an approved project. This group is currently about two hundred people, which allows us to spread the decision making process across many different people and viewpoints. 

![Review Group](/assets/img/review-group.png)


### Discussing the why
The point here is to have as many eyes on the proposal as possible, specifically we are interested in discussing the WHY of releasing a project and the 3 questions below is central in this discussion:

1. Will the project be sustainable?
2. Do Zalando have any value in open sourcing and maintaing it long term?
3. Does it have any value to anyone outside Zalando?

When code is released as open source, you are essentially sharing something of value, and, you are also taking responsibility for committing time to the additional overhead associated with open sourcing. This commitment and exchange of value should be justified. There are multiple ways to look at this, such as:

1. The project contributes positively to the employer branding efforts and supports hiring of tech talent
2. The project helps establish the company as a leader in a certain domain
3. The project will gain features and bugfixes from external community members
4. The maintainer team could gain valuable knowledge through collaborating with external community members

At Zalando we've seen several projects contribute to our employer branding efforts, it is however a side-effect and should not be the main reason for open sourcing. It is of course nice that Zalando is recognised for its Kubernetes  ([External-DNS](https://github.com/kubernetes-incubator/external-dns), [Stackset-Controller](https://github.com/zalando-incubator/stackset-controller), [es-operator](https://github.com/zalando-incubator/es-operator)), PostgreSQL ([Patroni](https://github.com/zalando/patroni) and [postgres-operator](https://github.com/zalando/postgres-operator)) and Machine Learning projects ([Flair](https://github.com/zalandoresearch/flair) and [Fashion-mnist](https://github.com/zalandoresearch/fashion-mnist)). Nonethless it is hard to measure the brand impact of such projects, and not a long-term motivation for the maintainers or Zalando.

Justifying open sourcing is not easy, a fair amount of guessing is involved since you do not know how people outside the company will receive and adopt your projects. However, making an assesment of possible impact before release will be good guidance for the project maintainers. 

### Reviewing project quality
Besides discussing the WHY, the open source team looks at compliance-specific areas which could be a blocker for releasing:

1. Do we use dependencies which have incompatible licensing
2. Does the source code contain anything confidential (such as tokens, urls, passwords, etc) 
3. Does the project contain functionality or IP which gives Zalando a competetive advantage (such as the code that powers our search results)
4. Is the project something Zalando would consider trying to patent?

We use a dependency licensing scanning tool, as well as a source code scanner to look for tokens and passwords, to automate this as much as possible.

### Review Meeting
Once a month the review group sits down with the maintainers proposing new projects. The discussions from the mailing-list are considered by the group and a decision is made. The project is either released, rejected, or, the maintainers are asked to improve certain aspects of the project before it can be released. By including the maintainers directly in the discussion we avoid having a blackbox reviewing projects in secrecy, instead the discussions are fast and transparent to everyone involved. 

Depending on the number of project proposals, the meeting takes between 30-60 minutes. For each project reviewed, the open source team writes a one page release notes document which outlines why the project is being released, the discussion in the meeting and the measures taken to ensure our compliance rules are followed. 

After the review meeting, the open source team sits down with the maintainers and perform the release of the project on GitHub.

## Publishing the source code
After mailing-list discussion and approval in the monthly meeting, the project is released. We have a specific approach to doing this:

1. We only transfer the current state of the repository to github, so we do not include the git history, while having the history would be very valuable to track down decisions for code changes, it is simply too big of a security risk and would require the maintainers to audit all commits.

2. We automatically merge project files with our baseline files, to ensure all repositories have a minimal set of files, these are templated with employee names, emails and github names, so contact info and meta data is consistent. 

3. The project is setup with a dedicated team assigned to it, with the correct branch protection in place and compliance tooling installed by default (we have a bot called [Zincr](https://github.com/zalando-incubator/zincr) for this)


And that is our release process for initially releasing new projects, I hope it gave you an insight into what a company of Zalando's size has to consider before releasing new code and how we have tried to keep the process simple and transparent for the maintainers of our projects. 

In future posts, I will go through how we monitor current projects, how we decide what to keep and what to decommission as the projects evolve.
