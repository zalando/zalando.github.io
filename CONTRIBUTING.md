# Contributing Guide

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

# Getting Started

This repository has two purposes:
- Maintaining the OST website
- Storing documentation related to the team goals and strategy

## Creating Issue and Pull Request

Submitting changes requires an issue to describe what you want to change and why. Secondly you will need to start a new pull request where your progress is tracked and all discussions related to your implementation is kept.

- Fork the repository
- Create an issue
- Open a pull request and use the label - `pr: Work in Progress`
- See below [template](#example-template-for-pr)


## Making and Submitting Changes to the Pull Request

As you work through the issue, make sure you commit your changes in logical chunks, include a commit message that describe what you changed and why.

- Commit with a meaningful message
- Sign the commit
- Once the PR is ready, please remove the label - `pr: Work in Progress`
- See below [template](#example-template-for-commit-message)


### Example Template for Pull Request

We have included a template on Github for creating new pull requests. An example is shown below to give you an idea of what information we need, to understand your submitted changes. A pull request should:

- Use a clear title
- Have a reference to the issue it is fixing
- Have a description of 2-3 sentences to explain the changes being made
- Indicate if it's a new feature, bug fix or refactor
- Outline the tasks being done to solve the issue

```
Issue #15 - Initial website layout

This PR creates the initial scaffold structure for the team website. The Catwatch data is called via the `fetch` API and
displayed in `index.html` page. CSS Flexbox is used as the CSS layout model.

Types of Changes

What types of changes does your code introduce? Put an `x` in all the boxes that apply and remove the other points which aren't applicable:

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

## Submit a blog article to [Zalando Open Source Blog](https://opensource.zalando.com/blog/)
The blog is built with [Github Pages](https://help.github.com/articles/what-is-github-pages/). Please set up a local version of your [Jekyll GitHub Pages site](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/) to test changes locally before making a pull request
- Blog articles are stored in folder **/_posts/**
- To create a new article, create a .md file with [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- Each blog article requires a banner image which is stored in folder **/assets/img/banners/**. You can add a new banner there or use one of the exisiting ones. 
- If you include images in the content of the article, please add those into the folder **/assets/img/**. 
- Please do not forget to test your changes locally before submitting a pull request. 
- Review process often takes 2 - 4 days. 


# Contact

- **Email**: opensource@zalando.de
- **Issue tracker**: https://github.com/zalando/ost/issues
