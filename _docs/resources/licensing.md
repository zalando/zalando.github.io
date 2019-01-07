---
title: Licensing
author: OST
date: 2018-11-30
index: 2
banner:
  image: coding.jpg
category: Resources
---

#### For both using and releasing Open source Software, there is the challenge of understanding and respecting the licenses of your project dependencies. The purpose of this document is to outline what licenses to avoid, which ones you can freely use and which licenses comes with special requirements.

### Summary

* Any dependency with a **permissive license** can be used
* For internal projects, **Permissive, Strong and Weak Copyleft licensed** code can be used
* For open source projects, **Strong Copyleft** licensed code cannot be used
* Make sure to investigate the specific terms of the **weak copyleft** licenses
* You cannot use **AGPL or variants** thereof licensed code anywhere
* You cannot use **Commons Clause** licensed code anywhere
* You cannot use **unlicensed code** anywhere

---

## License overview

Overall there are 3 types of licenses which you can use:

* [Permissive licenses](#permissive-licenses)
* [Weak copyleft licenses](#weak-copyleft-licenses)
* [Strong Copyleft licenses](#strong-copyleft-licenses)

And 3 types which you cannot use in any way:

* [Code licensed under AGPL or variants thereof](#Code-licensed-under-AGPL-or-variants-thereof)
* [Commons Clause licensed code](#Guidance-on-Commons-Clause-and-similar)
* [Unlicensed code](#unlicensed-code)


This document is a general overview and does not represent legal advice. Always check the details of each license and if you are in doubt, get in touch with the Open Source Team.

If you wish to use a dependency with a license not listed in this guidance, please get in touch with the open source team for guidance. 

## Permissive licenses

Code dependency which you are free to use and change without limitations, but must include the license and copyright of the dependency.

Permissive licensed dependencies can be used without issues both for internal and for open source projects.

_[AFL](https://tldrlegal.com/l/afl3),
[Apache](https://tldrlegal.com/l/apache2),
[BSD](https://tldrlegal.com/l/bsd3),
[MIT](https://tldrlegal.com/l/mit),
[MS-PL](https://tldrlegal.com/l/mspl),
[ISC](https://tldrlegal.com/l/isc),
[PHP License](https://tldrlegal.com/license/the-php-license-3.0.1),
and many more_

* You are free to: **use** commercially, **modify**, **distribute** and **sublicense**.
* You must include: **copyright** and **license**
* You cannot hold the author liable.

## Weak copyleft licenses

Code dependency which you are free to use and change, but must include the source code, the license and copyright of the dependency, but only if you distribute the software. You can license your own code however you want, and you must only share the source code of the reciprocally licensed dependency.

Beware that each individual license has specific clauses, so check the individual license before use, generally speaking, weak copyleft licensed libraries can be used for internal and open source projects.

_[APSL](https://tldrlegal.com/l/aspl2),
[CDDL](https://tldrlegal.com/l/cddl),
[CPL](<https://tldrlegal.com/license/common-public-license-1.0-(cpl-1.0)>),
[EPL](https://tldrlegal.com/l/epl),
[IPL](https://tldrlegal.com/l/ipl),
[MPL](https://tldrlegal.com/l/mpl-2.0)_

* You are free to: **use** commercially, **modify**, **distribute** and **sublicense**.
* You must include: **copyright**, **license**, **changelog**, **source code** and **install instructions**
* You cannot hold the author liable or use authors trademarks

## Strong Copyleft licenses

Code dependency which require you to license **all** your code under the same license if you want to distribute it. If only used internally, you have no obligation to release neither source nor binary.

Dependency can therefore only be used for internal projects, not for projects which will be distributed outside of Zalando, such as open source projects.

_BCL,
[GPL](https://tldrlegal.com/l/gpl-3.0),
[LGPL](https://tldrlegal.com/l/lgpl-3.0),
[NPL](<https://tldrlegal.com/license/netscape-public-license-v1.1-(npl-1.1)>),
[OSL](<https://tldrlegal.com/license/open-software-license-2.1-(osl-2.1)>),
[QPL](<https://tldrlegal.com/license/q-public-license-1.0-(qpl-1.0)>) and more_

* You are free to: **use** commercially, **modify** and **distribute**
* You must include: **copyright**, **license**, **source code**, **changelog**, **original source** and **install instructions**
* You cannot hold the author liable or sublicense
* If distributed, you must license your code under the same license.

## Code licensed under AGPL or variants thereof
These licenses trigger the copyleft provision even when it is not distributed. If code under these licenses is used to deliver a web-service such as Zalando.de, all code and code linked to the service must be licensed and distributed under a similar license.

Use of dependencies licensed under these licenses represents a big risk for Zalando, so even for projects which are not directly linked to any of our web services, it must not be used as the benefits compared to the risks are small.

Code licensed under 
[AGPL](https://tldrlegal.com/l/agpl3),
[SSPL](https://www.mongodb.com/licensing/server-side-public-license), 
[RPL](<https://tldrlegal.com/license/reciprocal-public-license-1.5-(rpl-1.5)>),
[EUPL](https://spdx.org/licenses/EUPL-1.2.html) and 
[CPAL](https://tldrlegal.com/license/common-public-attribution-license-version-1.0-(cpal-1.0)), may not be used at Zalando.



## Guidance on Commons Clause and similar
The [Commons Clause](https://commonsclause.com/) license is a new license being used as a wrapper around existing licenses such as the Apache or MIT license, and adds additional limits on commercial use of the software. The intent is to limit cloud providers to use the software, but the license language targets commercial use and monetization very broadly. 

While Zalando is not a Cloud provider, it is a commercial endeavor and our use of the software we are adopt
are without question commercial, this license is therefore not suitable for us for the following reasons: 

1. The Commons Clause is not approved by OSI and is therefore not open source, furthermore the language of the license is unclear in regards to what is proper use, if in breach of this license, Zalando must publish all associated assets such as interfaces, build systems and modifications made under the same license.

2. We use and support open source under the belief that it is the freedom to use, modify and distribute which have enabled its success. The projects using these licenses still enjoy the full freedoms and benefits from open source, but at the same time limit the freedom of others use of their code - we do not wish to support this development.


## Unlicensed code

Code which does not include a license or have no clear ownership cannot be used at Zalando.

As per standard copyright law, any code which is not explicitly licensed, is the property
of the author and cannot be used without permission.

However if you wish to use a library which have no license, first of all check with the author to see if the license is simple not distributed with the source code. If the project author has not included a license open a pull request and suggest a license such as MIT.
