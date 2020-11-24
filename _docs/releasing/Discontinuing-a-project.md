---
title: Discontinuing a project
author: OST
date: 2020-05-20
index: 3
category: Releasing
---

**Overview of the different options for discontinuing a Zalando open source project, this process is to
be used for projects which no longer have active maintainers, or projects which Zalando no longer have a motivation
to maintain, usually due to lack of internal use.**


### Summary

- We are obligated to gracefully discontinue projects, which we have no motivation to maintain anymore
- Projects can be archived, users directed to a 3rd party fork, or the ownership of such project can be transferred
- The open source guild can help you make the right choice


**Contact the open-source guild (Zalando Internal) for guidance.**

---

## What projects should be discontinued?

Two factors indicate whether a project is ready for being discontinued. Either the project has no active maintainers, 
and/or the project has no internal usage. While these two factors typically overlap, a project with internal
usage and no maintainers needs support to [find new internal maintainers](https://opensource.zalando.com/docs/promoting/promotion-channels/) rather than being discontinued.

Events which typically trigger a project to become discontinued:

- The Zalando employee maintaining the project is leaving the company
- Internal use of project is phased out / replaced


## Options for discontinuing

If the project is deemed fit for being discontinued, there are multiple options for executing this change:

#### Discontinue with no succesor
The project is marked as archived on github, readme is updated to indicate when maintenance will end,
no alternative owner is found.

#### Endorse a 3rd party fork
The project is continued in a fork by a 3rd party, which due to copyright law can not be
a Zalando employee. The project's readme is updated to point users toward this fork for updates.
Any distribution (such as a package manager) can be transferred, as long as it does not include the 
Zalando name.

#### Transfer project ownership to 3rd party
Ownership and maintainership is transferred to a 3rd party via a legal document outlining the
conditions of the transfer. The GitHub project is transfered to a new owner and GitHub will
automatically start redirecting old links to a new owner.
Project ownership cannot be transfered to a current employee, but can be transferred to former
employees.

For all 3 options above, a snapshot of the project must be transferred to the internal GitHub
for future reference. 


Contact the open-source guild (Zalando Internal) for guidance on which option is the right one.
