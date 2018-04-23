# Getting started

The OST repository has two purposes:
- Maintaining the OST website
- Storing documentation related to the team goals and strategy

# Process

## Create issue and PR

- Fork the repository
- Create an issue
- Open a PR and use the label - `pr: Work in Progress`
- See below [template](#Example-template-for-PR))

## Making and submitting changes to the PR

- Commit with a meaningful message
- Use the corresponding issue number in the commit message (See below template)
- Sign the Commit
- Once the PR is ready, please use the label - `pr: Needs a Review` and remove the label - `pr: Work in Progress`
- See below [template](#Example-template-for-commit-message))

## Example template for PR

```

- Issue #15 Initial website layout
- **Description**: This PR addresses the initial website layout.
- **Tasks**:
  - [x] Create index.html
  - [x] Setup css and js code
  - [ ] Follow Zalando dress-code standard
- Screenshot (optional)

```

## Example template for commit message

```
git commit -m "Some meaningful commit message. Fixes #15" -s
```

The `-s` in the above commit message signs your commit.
