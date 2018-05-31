# Github

_All Zalandos open source projects are hosted on GitHub under one of the Zalando organizations. We have a number of guidelines for how to use GitHub and what the different organizations are used for._

### _tl;dr_

* The incubator is where all new open source projects start
* You join the Github organizations via [people.Zalando.net](http://people.zalando.net
* We have clear ownership - one project - one team
* We review all code and encourage Git-Flow
* Projects can have contributors from outside Zalando

---

## Organizations

There are 2 primary organizations which act as the central source for Zalando open source projects and 4 project/topic specific organizations. With very few exceptions the Zalando-Incubator is the organization where new projects will initially be published.

* [Zalando-Incubator](https://github.com/zalando-incubator) - Incubator of new projects which have not yet matured enough to be on the main org.
* [Zalando](https://github.com/zalando) - The primary organization hosting mature projects already graduated from the incubator
* [Zalando-Research](https://github.com/zalandoresearch) - Organization hosting data and projects released by the Zalando research team
* [Zalando-Nakadi](https://github.com/zalando-nakadi) - Projects related to Nakadi - a distributed event bus
* [Zalando-ZMON](https://github.com/zalando-zmomn) - Projects related to ZMON - Our realtime monitoring project
* [Zalando-STUPS](https://github.com/zalando-stups) - Projects related to the Zalando STUPS platform

## Joining Zalando on GitHub

For all Zalandos the process is simple: go to the **internal** site at [people.Zalando.net](http://people.zalando.net) and register your GitHub username, you will then automatically be invited into the organizations.

## Organization permissions

* Members cannot create, un-publish, delete or rename repositories
* The default access to all repositories for members is read-access
* Project maintainers have write access to the project they maintain
* External collaborators cannot have write access to the master branch

## Repository requirements

* Master branch is protected
* All pull requests must be reviewed by at least 2 [CODEOWNERS](https://help.github.com/articles/about-codeowners/)
* Signed commits are required as per the [DCO](https://developercertificate.org/)

## Project ownership

Each published project have a dedicated team of maintainers. The maintainer team have write access to the repository and are the direct owners of the project. Everyone who is not an active maintainer are free to open a pull request which must be reviewed by at least 2 of the maintainers listed in the Codeowners file.

## External collaborators

All projects can have external contributors, maintainers are free to invite contributors from outside of Zalando to join as an external contributor. This is a matter of judgment by the individual project team.

## Employees leaving Zalando

Zalando employees leaving Zalando will be converted to external contributors. External Contributors cannot be a Codeowner as this violates the rules of play, and can therefore not accept and merge pull requests, but can still comment on code as part of reviews.

## Process for graduating from Zalando-Incubator

The open source review group acts as the gatekeeper of which projects are ready to be accepted into the Zalando-incubator organization. Furthermore the review group decides which projects are mature to graduate to the main Zalando organization.
