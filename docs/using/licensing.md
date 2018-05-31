# Licensing

For both using and releasing Open source Software, there is the challenge of understanding and respecting the licenses of your project dependencies. The purpose of this document is to outline what licenses to avoid, which ones you can freely use and which licenses comes with special requirements.

Overall there are 3 types of licenses which you can use:

* [Permissive licenses](#permissive-licenses)
* [Limited copyleft licenses](#limited-copyleft-licenses)
* [Copyleft licenses](#copyleft-licenses)

And 2 types which you cannot use in any way:

* [AGPL licensed code](#agpl-licensed-code)
* [Unlicensed code](#unlicensed-code)

This document is a general overview and does not represent legal advice. Always check the details of each license and if you are in doubt, get in touch with legal.

## Permissive licenses

_AFL, Apache, ASL, BSD, MIT, MS-PL, ISC, PHP License, PSFL, and many more_

Code dependency which you are free to use and change without limitations, but must include the license and copyright of the dependency.

Permissive licensed dependencies can be used without issues both for internal and for open source projects.

* You are free to: **use** commercially, **modify**, **distribute** and **sublicense**.
* You must include: **copyright** and **license**
* You cannot hold the author liable.

## Limited copyleft licenses

_APSL, CDDL, CPL, EPL, IPL, MPL_

Code dependency which you are free to use and change, but must include the source code, the license and copyright of the dependency. You can license your own code however you want, and you must only share the source code of the reciprocally licensed dependency.

Beware that each individual license has specific clauses, so check the individual license before use.

* You are free to: **use** commercially, **modify**, **distribute** and **sublicense**.
* You must include: **copyright**, **license**, **changelog**, **source code** and **install instructions**
* You cannot hold the author liable or use authors trademarks

## Copyleft licenses

_BCL, GPL, LGPL, NPL, RPL, OSL, QPL and more_

Code dependency which require you to license **all** your code under the same license if you want to distribute it. If only used internally, you have no obligation to release neither source nor binary.

Dependency can therefore be used for internal projects, but not for projects which will be distributed outside of Zalando.

* You are free to: **use** commercially, **modify** and **distribute**
* You must include: **copyright**, **license**, **source code**, **Changelog**, **original source** and **install instructions**
* You cannot hold the author liable or sublicense
* If distributed, you must license your code under the same license.

## AGPL licensed code

Code licensed under AGPL (Affero General Public License) may not be used at Zalando.

Code dependency which triggers the copyleft provision even when it is not distributed. If AGPL code is used to deliver a webservice such as zalando.de, all code and code linked to the service must be licensed and distributed under AGPL.

Use of software licensed under AGPL represents a big risk for Zalando, so even for projects which is not directly linked to any of our services, it must not be used as the benefits compared to the risk is small.

## Unlicensed code

Code which does not include a license or have to clear ownership cannot be used at Zalando.

As per standard copyright law, any code wich is not explicitedly licensed, is the property
of the author and cannot be used without permission.

However if you wish to use a library which have no license, first of all check with the author to see if the license is simple not distributed with the source code. If the project author has not included a license open a pull request and suggest a license such as MIT.

Copyleft: Copyleft is a legal obligation that Zalando must fulfill when you modify and/or distribute and/or make third party material publicly available (so-called “copyleft trigger”).

Examples: changing the program code, uploading to public GitHub, sending it to someone else from another company. Copyleft may oblige Zalando to license its modifications also under the license whose copyleft was triggered. In legal terms, “modification” can be interpreted very broadly—e.g. whole libraries or code that you added (so-called “scope of copyleft”).

For Modification + Internal and/or Publishing, do not use reciprocal licenses that trigger the copyleft already during internal modification—e.g. RPL or APSL 2.1, AGPLv3.

For Modification + Publishing:

See above (RPL, ASPL 2.1, AGPLv3, etc.).
Do not use licenses with strict copyleft, e.g. GPLv2, GLPLv3, unless you have clearance from Legal.
If you use licenses with limited copyleft (e.g. LGPLv2.1, LGPLv3, MPLv2, CPL), please make sure you can fulfill their specific requirements to restrict the copyleft from taking over Zalando’s or other third-party’s code. → reach out to Legal.

License Template for Multi-Licensed Projects without Copyleft

“This {name} Project is in general licensed under the following MIT license except the files named underneath (see corresponding notice files below)

(Insert Zalando MIT from Appendix 6 above)
Notice file for (path)/(other file)

(Insert license text & copyright notice from the original file here)
Notice file for (path)/(other file)

(Insert license text & copyright notice from the original file here)
(...)
