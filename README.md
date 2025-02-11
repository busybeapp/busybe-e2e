# BusyBe E2E

## Overview

BusyBe E2E is an end-to-end testing suite for the BusyBe application. It leverages Cypress for automated UI testing.

---

### Prerequisites

Ensure you have the following installed before running the tests:

- Node.js (latest LTS recommended)
- npm
- A valid `SLACK_TOKEN`

---

### Installation

Clone the repo and run the following

```shell
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

#### Github Action Mode

The E2E suite runs daily at midnight UTC.

You can also run trigger the action manually [here](https://github.com/busybeapp/busybe-e2e/actions/workflows/e2e-daily.yml)
