---
title: Releasing a new open source project
author: OST
date: 2018-06-14
index: 1
banner:
  image: coding.jpg
category: Releasing
---

#### This is the process for how Zalando employees release a new open source project on the [Zalando-Incubator](../../resources/github). The process is simple and the open source team is ready to help you every step of the way.

---

## Overview

Releasing a new open source project is a simple and fast process when you are already following Zalandos rules of play:

* [Get Sign-off](#get-sign-off): Ensure you have organizational buy-in from your lead and that your project is possible to open source   
* [Be Compliant](#be-compliant): Ensure your project is compliant with rules of play and open source best practices
* [Prepare your repository](#prepare-your-repository): Clean up and refactor your code to work outside the Zalando environment.
* [Get Reviewed](#get-reviewed): The Zalando open source review group is responsible for reviewing your project


<br>
<a class="dc-btn dc-btn--primary" style="color: white" target="_blank" href="https://goo.gl/forms/ZuykiWZvYZ4OnfzH2">Submit your project for review (internal)</a>


----

## Get Sign-off  
Ensure your lead and team are onboard with open sourcing your project, that everyone understand the time and effort required, and that there is no competitive disadvantages to Zalando.

### Get acceptance from your team and your lead

Make sure your team lead (Zalando level C8 employee) is informed about open sourcing a project, and that your lead is supportive of this. Open sourcing code is a process which requires time and effort, so make sure your lead and your team understand that some of your work hours will be spend maintaining this project and the community around it.

[Sign-off Guide for leads](/docs/releasing/lead-sign-off-guide/)

### What cannot be open sourced?

Anything that risks Zalando’s competitive advantage is not permissible for publication on GitHub.com. This typically means technologies we build that are intrinsic to generating or reinforcing the uniqueness of our customer experience. This could include (but is not limited to):

* confidential source code
* recommendation algorithms
* search functionalities that give us an edge over competitors

If you are in doubt, reach out to the Zalando [Open Source Team](/docs/resources/open-source-team/) or talk to your lead.


## Be Compliant

Compliance covers the area of ensuring that we follow a safe and consistent practice for sharing and collaborating.

### Rules of play

All open source projects must comply with Zalandos [Rules Of Play](https://rulesofplay.docs.zalando.net/)(internal link), and the open source specific rules of play, which applies to code that any Zalando employee releases. There are 3 areas which the rules cover:

* Including the right files for licensing, documentation and ownership of the project
* Following the right procedure for how you create and release code
* Respecting and assigning copyright

#### Include the required assets

Use [new-project](https://github.com/zalando-incubator/new-project) as a boilerplate for the files required for your project. These files are needed to correctly communicate ownership and guidelines for the project:

1.  Create a meaningful `README.md` file, this is your most important piece of documentation
2.  Include a `MAINTAINERS.md` file with contact information
3.  Include a `CONTRIBUTION.md` file with guidelines on how to contribute
4.  Include a `SECURITY.md` file
5.  Add a `LICENSE.md` file, license must be the MIT license with the copyright set to Zalando SE
6.  Ensure you only use license-compatible code/dependencies (see [licensing](../../resources/licensing))

The open source team can help you setting this up during a initial review. 

#### Use proper procedure for collaboration

When the project has been released as a public project on Github the following workflows are expected of you:

1.  Semantically version project artifacts. You MUST tag all versions in GitHub with the exact version name: e.g., 0.1.0.
2.  Sign-off every commit, as per the [DCO](https://developercertificate.org/) - PGP signing is not required
3.  Ensure that no credentials, private identifiers or personal data is at any time present in your repository
4.  Enforce code-reviews with at least 2 sets of Zalando eyes on all code to minimize the risk of implanted security backdoors and vulnerable code.
5. Ensure there is an active team of maintainers of at least 2 Zalandos taking ownership of the project


### Community best practices

Besides the rules of play, there is also a set of best practices which we highly recommend you implement.

1.  Have a code of conduct and enforce it to create a safe environment for collaboration
2.  Set clear expectations for responses - let users know if your time is limited
3.  Ask for help and be open to what kind of contributions would help your project
4.  Be mindful of your documentation

[opensource.guide](https://opensource.guide/building-community/) has plenty more resources and recommendations for maintainers.

### Copyright and ownership

Default ownership of all code released by Zalando employees are copyright Zalando SE and must be released under the Zalando GitHub organizations.  

## Prepare your repository

Preparing a repository for open sourcing goes beyond ensuring it is in compliance with the rules above. This can include refactoring and documenting your code better to ensure that users and potential contributors can make sense of it.

* Ensure you do not have any tokens, passwords or confidential data in your code
* Ensure the code doesn't require any Zalando-specific infrastructure or access, so users can use in their own environment
* Ensure your code is clear and commented so newcomers can see what is going on
* Ensure your dependencies are updated and does not have any known security issues
* Ensure that it is easy to get up and running, not just on your machine

## Get Reviewed

When you have checked off the compliance checklist and prepared your code for release, request a review from the [Open Source Review Group](/docs/resources/open-source-review-group/) who will help you setup a Github repository and sign off on open sourcing your code.

<br>
<a class="dc-btn dc-btn--primary" style="color: white" target="_blank" href="https://goo.gl/forms/ZuykiWZvYZ4OnfzH2">Submit your project for review (internal)</a>

## Release

When all the above points are in order and the review has been passed, the project is released
on Zalando-Incubator. All new projects are released here and are then reviewed over a 6 month period for inclusion in the main Zalando org.
