# BusyBe E2E

## Overview
BusyBe E2E is an end-to-end testing suite for the BusyBe application. It leverages Cypress for automated UI testing.

---
### Prerequisites
Ensure you have the following installed before running the tests:
* Node.js (latest LTS recommended)
* npm
* A valid `SLACK_TOKEN` environment variable

---
### Installation

Clone the repository and install dependencies:

```shell
git clone https://github.com/busybeapp/busybe-e2e.git
cd busybe-e2e
npm install
```
---

### Running Tests

#### Headless Mode

To run tests in headless mode:

```shell
SLACK_TOKEN=<your_slack_token> make test
```

#### Interactive Mode

To open Cypress and run tests manually:


```shell
npm run cy:open
```
