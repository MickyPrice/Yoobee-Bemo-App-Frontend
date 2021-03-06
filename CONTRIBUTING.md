# Contributing to Bemo

The following is a set of guidelines for contributing to Bemo. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[Getting Started?](#getting-started)
  * [Bemo](#bemo)
  * [Bemo Design Decisions](#design-decisions)

[How Can I Contribute?](#how-can-i-contribute)
  * [Local Development](#local-development)
  * [Pull Requests](#pull-requests)

[Styleguides](#styleguides)
  * [Git Commit Messages](#git-commit-messages)
  * [JavaScript Styleguide](#javascript-styleguide)


## Getting Started

### Bemo

Bemo aims to solve is the cumbersome task of paying other people, currently, most banks have an app that requires you to put in the payee’s bank account number requiring the payee to go to their bank app, copy their bank account number, go over to another application like messenger, paste in their number and send it to the payer. The payer must then go to the messaging app, copy the number across, paste it into their app and pay. On top of that, a lot of banks charge a steep transaction fee on top of that. It’s a long, inconvenient process. This is where Bemo shines, Bemo offers a quick, easy way to pay people, there are 2 options, either, the payee opens up their app, shows their unique QR code to the payer who then scans their QR code and pays them or the payer can simply input the payee’s username and pay like that.

Bemo is the go-to when it comes to fun, efficient and secure money transaction between business to consumer or peer to peer.

### Design Decisions

When we make a significant decision in how we maintain the project and what we can or cannot support, we will document it in the project documentation held on Figma.

## How Can I Contribute?

Given Bemo is a private project, any changes should be recorded and documented within the main Bemo documentation files found in the Bemo Google Drive. Any additions should be on it's own branch and fork of the developer before pull requests are made.

#### Local development

Local development should be done using a local version of the backend found in the [Bemo Backend Repository](https://github.com/MickyPrice/Yoobee-Bemo-App-Backend/ "Bemo Backend Repository")

**Project setup**
```
npm install
```

**Compiles and hot-reloads for development**
```
npm run serve
```

**Compiles and minifies for production**
```
npm run build
```

**Lints and fixes files**
```
npm run lint
```

### Pull Requests

The process described here has several goals:

- Maintain Bemo's quality
- Fix problems that are important to the project
- Enable a sustainable system for Bemo's maintainers to review contributions

Please follow these steps to have your contribution accepted into the main repository:

1. Follow the [styleguides](#styleguides)
2. Before you submit your pull requests, please ensure your code passes all [ESLint](.eslintrc.js "ESLint") checks and does not cause errors / breaks the application.

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Start the commit message with an emoji if applicable:
    * :art: `:art:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files
    * :white_check_mark: `:white_check_mark:` when adding tests
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :arrow_down: `:arrow_down:` when downgrading dependencies
    * :shirt: `:shirt:` when removing linter warnings

### JavaScript Styleguide

All JavaScript code is linted with [Prettier](https://prettier.io/).

All JavaScript code should be using modern standards as of ECMAScript6.


### CSS Styleguide

All CSS should be written using the SASS compiler.

If CSS is not reusable throughout other components, it should be contained and scoped to the component it relates to.

CSS should be written using [BEM methodology](http://getbem.com/ "BEM methodology").


#### Pull Request Labels

| Label name | Description |
| --- | --- |
| `work-in-progress` | Pull requests which are still being worked on, more changes will follow. |
| `needs-review` | Pull requests which need code review, and approval from Team Bemo. |
| `under-review` | Pull requests being reviewed by Team Bemo. |
| `requires-changes` | Pull requests which need to be updated based on review comments and then reviewed again. |
| `needs-testing` | Pull requests which need manual testing. |
