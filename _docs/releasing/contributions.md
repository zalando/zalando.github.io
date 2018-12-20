---
title: Accepting contributions
author: OST
date: 2017-08-30
index: 5
banner:
  image: coding.jpg
category: Releasing
---

#### After your project is released you may wish to accept contributions from fellow Zalandos or the wider open source community. This is highly encouraged and each individual project team decides on which contributions go into their project.

### Summary

* Make sure all commits are signed
* Make sure at least 2 Zalando employees have reviewed the changes
* Readme.md and Contributing.md are the 2 most important documents, make sure they are good

---

## Rules of play that apply to contributions

New contributions must be submitted in the form of a pull-request which can then be reviewed by the project maintainers. As a project maintainer you must ensure the following standards are applied:

1.  Sign every commit, as per the [CDO](https://developercertificate.org/) - PGP signing is not required
2.  Ensure that no credentials, private identifiers or personal data is at any time present in your repository
3.  Enforce code-reviews with at least 2 sets of Zalando eyes on all code to minimize the risk of implanted security backdoors and vulnerable code.

## Have a clear workflow

To encourage contributions, you must provide a clear guide for how contributions gets accepted into the codebase - this must all be outlined in the CONTRIBUTION.md file. To help new contributors get started with your project, have all this information outlined in the readme.md.

* Document how to get the source code to build
* Document the PR review process
* Have a clear vision and scope for your project
* Be responsive to issues and pull requests, even if it's to decline them

### Automatic git sign-off
Git sign-off can be done by adding the `-s` flag to `git commit` commands. However non-commandline tooling often doesn't support this, in which case you can add a git hook to ensure your commits are signed - in the [global .git-hooks folder](https://github.com/git-hooks/git-hooks/wiki/Get-Started) add a file named `prepare-commit-msg`, add the following and ensure it has rights to execute: 

```
#!/bin/sh

NAME=$(git config user.name)
EMAIL=$(git config user.email)

if [ -z "$NAME" ]; then
    echo "empty git config user.name"
    exit 1
fi

if [ -z "$EMAIL" ]; then
    echo "empty git config user.email"
    exit 1
fi

git interpret-trailers --if-exists doNothing --trailer \
    "Signed-off-by: $NAME <$EMAIL>" \
    --in-place "$1"
```

### Automatic sign-off on Github.com
For small changes made to documentation, it can be fast and simple to do this on github.com - unfortunately sign-off is not supported there. However, there is a small Chrome extension which adds automatic sign-off to all commits made though the github ui [available on the chrome webstore](https://chrome.google.com/webstore/detail/dco-github-ui/onhgmjhnaeipfgacbglaphlmllkpoijo)
