# Contributing guide

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

# Getting started

This repository has two purposes:
- Maintaining the OST website
- Storing documentation related to the team goals and strategy

## Creating issue and pull request

Submitting changes requires an issue to describe what you want to change and why. Secondly you will need to start a new pull request where your progress is tracked and all discussions related to your implementation is kept.

- Fork the repository
- Create an issue
- Open a pull request and use the label - `pr: Work in Progress`
- See below [template](#example-template-for-pr)


## Making and submitting changes to the PR

As you work through the issue, make sure you commit your changes in logical chunks, include a commit messages that describe what you changed and why. 

- Commit with a meaningful message
- Sign the commit
- Once the PR is ready, please use the label - `pr: Needs a Review` and remove the label - `pr: Work in Progress`
- See below [template](#example-template-for-commit-message)


### Example template for PR

We include a template on github for creating new pull requests. An exemple is showed below to give you an idea of what infomation we need to understand your submitted changes. A pull request should:

- Use a clear title
- Have a reference to the issue it is fixing
- Have a description of 2-3 senteces to explain the changes being made
- Indicate if it's a new feature, bug fix or refactor
- Outline the tasks being done to solve the issue

```
Issue #15 - Initial website layout
This PR creates the initial scaffold structure for the team website. The Catwatch data is called via the `fetch` API and 
displayed in `index.html` page. CSS Flexbox is used as the CSS layout model.

Types of Changes
What types of changes does your code introduce? Put an `x` in all the boxes that apply:
- [x] New feature (non-breaking change which adds functionality)
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] Configuration change
- [ ] Refactor/improvements
- [ ] Documentation / non-code 

Tasks:
  - [x] Create index.html
  - [x] Setup css and js code
  - [ ] Follow Zalando dress-code standard

Checklist
Go over all the following points, and put an `x` in all the boxes that apply:
- [ ] My change requires a change to the documentation & I have updated it accordingly.


Screenshot: (optional)
  - Attach a screenshot image file
```


### Example template for commit message

```
git commit -m "Initial scaffold for the website layout" -s
```

The `-s` in the above commit message signs your commit.

# Contact

- **Email**: opensource@zalando.de
- **Issue tracker**: https://github.com/zalando/ost/issues
