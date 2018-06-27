---
title: Licensing
author: OST
date: 2017-08-30
banner:
  image: coding.jpg
category: Resources
---

#### For both using and releasing Open source Software, there is the challenge of understanding and respecting the licenses of your project dependencies. The purpose of this document is to outline what licenses to avoid, which ones you can freely use and which licenses comes with special requirements.

### Summary

* Any dependency with a permissive license can be used
* Copyleft licensed code can only be used if you plan NOT to distribute outside Zalando
* Make sure to investigate the specific terms of the copyleft licenses
* You cannot use AGPL licensed code
* You cannot use unlicensed code

---

## License overview

Overall there are 3 types of licenses which you can use:

* [Permissive licenses](#permissive-licenses)
* [Limited copyleft licenses](#limited-copyleft-licenses)
* [Copyleft licenses](#copyleft-licenses)

And 2 types which you cannot use in any way:

* [AGPL licensed code](#agpl-licensed-code)
* [Unlicensed code](#unlicensed-code)

This document is a general overview and does not represent legal advice. Always check the details of each license and if you are in doubt, get in touch with legal.

## Permissive licenses

_[AFL](https://www.tldrlegal.com/l/afl3),
[Apache](https://www.tldrlegal.com/l/apache2),
[BSD](https://www.tldrlegal.com/l/bsd3),
[MIT](https://www.tldrlegal.com/l/mit),
[MS-PL](https://www.tldrlegal.com/l/mspl),
[ISC](https://www.tldrlegal.com/l/isc),
[PHP License](https://tldrlegal.com/license/the-php-license-3.0.1),
and many more_

Code dependency which you are free to use and change without limitations, but must include the license and copyright of the dependency.

Permissive licensed dependencies can be used without issues both for internal and for open source projects.

* You are free to: **use** commercially, **modify**, **distribute** and **sublicense**.
* You must include: **copyright** and **license**
* You cannot hold the author liable.

## Limited copyleft licenses

_[APSL](https://www.tldrlegal.com/l/aspl2),
[CDDL](https://www.tldrlegal.com/l/cddl),
[CPL](<https://tldrlegal.com/license/common-public-license-1.0-(cpl-1.0)>),
[EPL](https://www.tldrlegal.com/l/epl),
[IPL](https://www.tldrlegal.com/l/ipl),
[MPL](https://www.tldrlegal.com/l/mpl-2.0)_

Code dependency which you are free to use and change, but must include the source code, the license and copyright of the dependency. You can license your own code however you want, and you must only share the source code of the reciprocally licensed dependency.

Beware that each individual license has specific clauses, so check the individual license before use.

* You are free to: **use** commercially, **modify**, **distribute** and **sublicense**.
* You must include: **copyright**, **license**, **changelog**, **source code** and **install instructions**
* You cannot hold the author liable or use authors trademarks

## Copyleft licenses

_[BCL](),
[GPL](https://www.tldrlegal.com/l/gpl-3.0),
[LGPL](https://www.tldrlegal.com/l/lgpl-3.0),
[NPL](<https://tldrlegal.com/license/netscape-public-license-v1.1-(npl-1.1)>),
[RPL](<https://tldrlegal.com/license/reciprocal-public-license-1.5-(rpl-1.5)>),
[OSL](<https://tldrlegal.com/license/open-software-license-2.1-(osl-2.1)>),
[QPL](<https://tldrlegal.com/license/q-public-license-1.0-(qpl-1.0)>) and more_

Code dependency which require you to license **all** your code under the same license if you want to distribute it. If only used internally, you have no obligation to release neither source nor binary.

Dependency can therefore be used for internal projects, but not for projects which will be distributed outside of Zalando.

* You are free to: **use** commercially, **modify** and **distribute**
* You must include: **copyright**, **license**, **source code**, **changelog**, **original source** and **install instructions**
* You cannot hold the author liable or sublicense
* If distributed, you must license your code under the same license.

## AGPL licensed code

Code licensed under [AGPL](https://www.tldrlegal.com/l/agpl3) (Affero General Public License) may not be used at Zalando.

Code dependency which triggers the copyleft provision even when it is not distributed. If AGPL code is used to deliver a web-service such as Zalando.de, all code and code linked to the service must be licensed and distributed under AGPL.

Use of software licensed under AGPL represents a big risk for Zalando, so even for projects which is not directly linked to any of our services, it must not be used as the benefits compared to the risk is small.

## Unlicensed code

Code which does not include a license or have no clear ownership cannot be used at Zalando.

As per standard copyright law, any code which is not explicitly licensed, is the property
of the author and cannot be used without permission.

However if you wish to use a library which have no license, first of all check with the author to see if the license is simple not distributed with the source code. If the project author has not included a license open a pull request and suggest a license such as MIT.
