---
title: Commons Clause at Zalando
date: 2018-12-03
author: The Open Source Team
---

> From today, Zalando is taking a stance against those who would seek to
> restrict the freedoms at the heart of Open Source by banning the adoption of
> any project covered by the Commons Clause, across all of Zalando's software
> engineering activities.

The license is one of the most crucial artefacts within any software project.
This is especially so in the case of Open Source; it is the license which
provides the legal grounds for the project owners' stance of Freedom and
openness. Simply put, without an OSI or FSF-approved license in place, your
project can hardly claim to be Open Source.

At the heart of any genuine Open Source license, is the provision of the [four
freedoms](https://fsfe.org/freesoftware/basics/4freedoms.en.html). Beyond that,
the nuances between licenses really serve to set expectations around how you
can _contribute_ to the project with one universal truth: these licenses want to
encourage contribution.

Recently, a new license called "Commons Clause" was released. The Commons
Clause is strictly speaking, not a license. Instead it is an addendum designed
to be applied to existing Open Source licenses to provide a specific
restriction.

In short: it restricts your ability to monetise the software.

## The Problems of Monetisation

In general, it is very hard to simply take a piece of Open Source software and
sell it as-is. A certain amount of value-add is required because the software
itself is freely-available. The "trick" is to focus on what customers _do_ want
to buy... productisation. This may be anything from training, to documentation,
to reliable packaging to consulting or even adding specific enterprise
features. Of course, increasingly common, there is the option to run the
software as a service.

It is a non-trivial problem and the (financial) sustainability of Open Source
will continue to be a challenge for a long time to come. Yet, there are still a
significant number of businesses that thrive on Open Source, based upon
carefully thought-out strategy. While sustainability is a problem, it _can_ be
solved; just look at the recent RedHat acquisition for proof.

<< Add some stuff on trickle down economics for maintainers here >>

# The Legal Issue With Commons Clause

The Commons Clause is undoubtedly a genuine attempt to solve the problem of
financially sustaining an Open Source project. It is also, however, an affront
to the spirit of Open Source. This is especially galling when we consider this
clause is specifically designed to be applied _on top_ of Open Source licenses,
rendering incompatible with the original intent of the license and with the
views of the wider community that contributed to the project.

This stance against the Commons Clause is not purely on a moral standpoint,
however the Commons Clause is also problematic from a legal standpoint. The
Commons Clause restricts selling and provides and strangley vague definition of
such:

> For the purposes of the foregoing, "Sell" means practicisng any or all of the
> rights granted to you under the License to provide to third parties, for a
> free or other consideration...

If we consider that all rights granted under the original license are
considered "Selling", then it could be easily be argued that simply _using_ the
software in support of a service provided to 3rd parties would be disallowed by
the Commons Clause.

The Commons Clause website makes great effort to clatify the text in additional
guidances notes. This guidance however, is just that. It is not included in the
contract itself. Which means this vague language is all that could be argued in
a legal proceeding. It clearly only offers benefit to the licensor. 

And lawyers.

> ...a product or service whose value derives, entirely or substantially, from
> the functionality of the Software.

What does substantially _mean_? Imagine if Zalando was to adopt "Open Source
Tech X" and it was covered by the Commons Clause; it's a tiny library that
constiutes a fraction-of-a-fraction of our codebase. Is _that_ substantial?
What if that code was responsible for delivering a crucial component of the
user experience?

# Taking A Stance

Today, Zalando is [joining others](https://opensource.google.com/docs/thirdparty/licenses/#commons-clause-not-allowed) in our industry by issuing a blanket ban on
Commons Clause licensed code:

- It can be argued that it disallows and commercial usage of the software;
- It is contrary to the spirit of the underlying license and the goodwill of
  the wider community around the software.

Zalando is proud of its history in contributing to Open Source and grateful to
all who have ever contributed to our projects and the projects we are reliant
on to build our platform. We look forward to working with the wider Open Source
ecosystem to address the serious issue of (financial) sustainability in Open
Source. We wish we had an answer now. We don't. What we do know, is that the
Commons Clause is not it.
