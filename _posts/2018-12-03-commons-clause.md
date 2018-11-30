---
title: Commons Clause at Zalando
date: 2018-12-03
author: The Open Source Team
---

> From today, Zalando is taking a stance against those who would seek to
> restrict the freedoms at the heart of Open Source by banning the adoption of
> any project covered by the Commons Clause, across all of Zalando's software
> engineering activities.

The license applied to software is one of the most crucial artefacts within
that project. This is especially so in the case of Open Source; it is the
license which provides the legal grounds for the project owners' stance of
Freedom and openness. Simply put, without an OSI or FSF-approved license in
place, your project can hardly claim to be Open Source.

At the heart of any Open Source license, is the provision of the [four freedoms](https://fsfe.org/freesoftware/basics/4freedoms.en.html). Beyond that,
the nuances between licenses really serve to set expectations around how you
can _contribute_ to the project with one universal truth: these licenses want to
encourage contribution. As a contributor to an Open Source project, one can
have the expectation that the artefacts contributed to the project also benefit
the contributor on equal terms.

Recently, a new license called "Commons Clause" was released. Whilst strictly
speaking not a license, the Commons Clause is an addendum designed
to be applied to existing Open Source licenses, restricting commercial activity
around the project by anyone other than the licensor.

Ultimately, the Commons Clause removes the equal footing between licensor and
licensee, by removing the freedom to monetize the project from all but the
licensor.

# The Problems of Monetisation

In general, it is very hard to simply take a piece of Open Source software and
sell it as-is. A certain amount of value-add is required because the software
itself is freely-available. The "trick" is to focus on what customers _do_ want
to buy... productisation. This may be anything from training, to documentation
to reliable packaging to consulting or even adding specific enterprise
features. Of course, increasingly common, there is the option to offer the
software as a managed service.

This is a non-trivial problem and the (financial) sustainability of Open Source
will continue to be a challenge for a long time to come. Yet, there are still a
significant number of businesses that thrive on Open Source, based upon
carefully thought-out strategy. While sustainability is a problem, it _can_ be
solved while maintaining the equal footing.

We can look, for example, at Wordpress and Automattic. Automattic is
able to monetise Wordpress by offering different grades of hosted service as
well as running a marketplace for Wordpress on Wordpress.com. Automattic is
not the owner of Wordpress but has, instead, handed control over to the
Worpress Foundation. This actually _ensures_ the future success of the
community beyond Automattic. Wordpress has a large and vibrant community
surrounding it. This community contributes code to the software itself, as well
as plugins, documentation, etc. Most importantly, many of these community
memebers _also_ have chosen to monetise Wordpress by offering services around
it. This has undoubtedly contributed to the overall success of the project.

We must ask ourselves: how many Wordpress community members would never have
joined had they known they could not monetise their work, and would Wordpress
have been as much of a success?

# The Legal Issue With Commons Clause

The Commons Clause is undoubtedly a genuine attempt to solve the problem of
financially sustaining an Open Source project. It is also, however, an affront
to the spirit of Open Source. This is especially galling when we consider this
clause is specifically designed to be applied _on top_ of Open Source licenses,
rendering it incompatible with the original intent of the license and with the
views of the wider community that contributed to the project.

Zalando's stance against the Commons Clause is not purely on a moral standpoint; the Commons Clause is also problematic from a legal standpoint. The
Commons Clause restricts selling and provides a strangely vague definition of
such:

> For the purposes of the foregoing, "Sell" means practicing any or all of the
> rights granted to you under the License to provide to third parties, for a
> free or other consideration (including without limiation fees for hosting or
> consulting/support services related to the software)...

If we consider that all rights granted under the original license are
considered "Selling", then it could be easily be argued that simply _using_ the
software in support of a service provided to 3rd parties would be disallowed by
the Commons Clause.

The Commons Clause website makes great effort to clarify the text in additional
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

Today, Zalando is [joining
others](https://opensource.google.com/docs/thirdparty/licenses/#commons-clause-not-allowed)
in our industry by issuing a blanket ban on Commons Clause licensed code:

- It can be argued that it disallows commercial usage of the software;
- It is contrary to the spirit of the underlying license and the goodwill of
  the wider community around the software, by removing equal footing between licensor and licensee. 

Zalando is proud of its history in contributing to Open Source and grateful to
all who have ever contributed to our projects and the projects we are reliant
on to build our platform. We look forward to working with the wider Open Source
ecosystem to address the serious issue of (financial) sustainability in Open
Source. Whilst not easy, ultimately an Open Source business is like any other:
provide value which customers are willing to pay for. Getting to the position
where you are providing value is a strategic process for the business, not a
legal one. Ultimately, the Commons Clause only serves to artifically create
value by restricting access to commercial solutions around the project, rather
than promoting a healthy ecosystem of equals who all contribute and benefit.
