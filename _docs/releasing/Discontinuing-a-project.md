---
title: Discontinuing a project
author: OST
date: 2020-20-05
index: 3
category: Releasing
---

**Overview of the different options for discontinuing a Zalando open source project, this process is to
be used for projects which no longer have active maintainers, or projects which Zalando no longer have a motivation
to maintain, usually due to lack of internal use.**


### Summary

- We are obligated to gracefully discontinue projects, which we have no motivation to maintain anymore
- There are different options to ensure the project lives on
- Projects can be archived, users directed to a 3rd party fork, or the ownership of such project can be transferred
- The open source guild can help you make the right choice

---

## What projects should be discontinued?

2 factors indicates if a project is ready for discontinuation. Either the project has no active maintainers, 
and/or the project have no internal usage. While these 2 factors typically overlap, a project with internal
usage and no maintainers need support to [find new internal maintainers]() rather than being discontinued.

Events which typically triggers a project being discontinued:

- Zalando Employee, maintaining the project, is leaving the company
- Internal use of project is phased out / replaced


## Options for discontinuing

If the project is deemed fit for discontiuation, the question is in what way this should be done, the options available for 
Zalando projects are:

#### Discontinue with no succesor
The project is marked as archived on github, readme is updated to indicate when updates is stopped,
no alternative owner is found.

#### Endorse a 3rd party fork
Project is continued in a fork by a 3rd party, due to copyright law, this 3rd party can not be
a Zalando employee. The project readme is updated to point users toward this fork for updates.
Any distribution (such as a package manager) can be transfered, as long as it does not include the 
Zalando name. 

#### Transfer project ownership to 3rd party
Ownership and maintainership is transfered to a 3rd party via a legal document outlining the
conditions of the transfer. The GitHub project is transfered to a new owner and GitHub will
automatically start redirecting old links to a new owner.
Project ownership cannot be transfered to a current employee, but can be transferred to former
employees.

For all 3 options above, a snapshot of the project must be transfered to the internal GitHub
for future reference. 

Contact the open-source guild (Zalando Internal) for guidance on which option is the right one.
