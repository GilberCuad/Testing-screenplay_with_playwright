# . Automation

Automated testing project created to test new features and ensure the quality. product using Behavior-Driven Development (BDD) approach with Cucumber and the Screenplay Pattern.

## Implemented Technologies

- Playwright
- Cucumber (BDD)
- Serenity/JS
- TypeScript
- Node.js
- Git
- Docker

---

# Environment Configuration

This project uses an `.env` file to store environment variables such as test URLs and credentials. Follow these steps to configure it:

1. Copy the `.env.example` file and rename it to `.env` in the project's root directory.
2. Open the `.env` file and replace the values with your environment-specific data:

   ```env
   ADDRESS_URL=your-test-url
   USER_MAIL=your-email
   PASSWORD=your-password
   HEADLESS=false/true
   ```

   _**Notes:** _
   - _Do not share or commit this file to public repositories, as it contains sensitive information._
   - _To run local tests with a graphical interface, ensure that the HEADLESS value is set to false._
   - _To run tests with Docker without a graphical interface, ensure that the HEADLESS value is set to true._

---

# Test Execution Approaches

There are two ways to run tests: **local testing** and **testing using Docker**.

## 1. Running Tests with Docker

The easiest way to run tests is using Docker, the following must be taken into account:

### 1.1. Docker Desktop

The **only requirement** is to have **Docker Desktop installed**. No additional configurations are needed.

### Steps to Run Tests with Docker

1. Ensure Docker Desktop is running and that the HEADLESS environment variable is set to true for running tests without a graphical interface in Docker.
   ```env
   HEADLESS=true
   ```
2. Clone the repository and execute:

   ```sh
   ./scripts/run-playwright.sh
   ```

   _**Note:** If using Windows, switch your terminal to Git Bash._

### What This Command Does:

- Checks if the container is running; if so, it stops it.
- Builds the Docker image.
- Sets up the services using Docker Compose.
- Enters the container to execute tests using Cucumber commands.

---

## 2. Running Tests Locally

If you prefer to run tests **without Docker**, ensure your system meets the following requirements and follow the setup instructions.

### System Requirements

- Latest version of Node.js 20, 22 or 24.
- Windows 10+, Windows Server 2016+, or Windows Subsystem for Linux (WSL).
- macOS 13 Ventura or later.
- Debian 12, Ubuntu 22.04, Ubuntu 24.04 (x86-64 and arm64 architecture).

### Clone and Install Dependencies

Clone the repository and install all dependencies by running:

```sh
npm run setup
```

### Environment File Configuration

- You must configure the environment variables as explained in the [Environment Configuration](#environment-configuration) section.

---

# How to Run Tests with Cucumber?

This project uses **Cucumber** to write tests in Gherkin syntax (BDD approach). Tests are organized by tags for easy execution.

## Test Case Naming Convention

All test cases follow a standardized naming convention:

```
@TC-[MODULE]-[SCREEN]-[NUMBER]
```

**Examples:**

- `@TC-AUTH-LOGIN-01` - Authentication module, Login screen, Test #01
- `@TC-DE-DEBIT-NOTE-02` - Electronic Documents, Debit Note, Test #02

**Module Abbreviations:**

The abbreviation for each module is defined in the technical automation annex.

---

## Understanding Tags

Tags are labels added to scenarios in `.feature` files to categorize and filter tests. They follow this convention:

```
@TC-[MODULE]-[SCREEN]-[NUMBER]
```

**Example:**

```gherkin
@smoke @regression
@TC-AUTH-LOGIN-01
Scenario: User logs in successfully
  Given condition
  When condition
  Then condition
```

**Tag Categories:**

- `@smoke` - Critical tests for quick validation (5-15 min)
- `@regression` - Complete test suite before releases (1-3 hours)
- `@TC-[MODULE]-[SCREEN]-[NUMBER]` - Unique test case identifier

---

## Running Tests by Tag

You can run specific tests using tags:

### Run tests by module

```sh
npx cucumber-js --tags "@TC-AUTH"
```

### Run tests by specific screen

```sh
npx cucumber-js --tags "@TC-AUTH-LOGIN"
```

### Run a single test case

```sh
npx cucumber-js --tags "@TC-AUTH-LOGIN-01"
```

### Combine multiple tags

```sh
# Run smoke tests from authentication module
npx cucumber-js --tags "@smoke and @TC-AUTH"

# Run all tests except work in progress
npx cucumber-js --tags "not @wip"
```

---

## Running Tests by Feature File

Execute all scenarios in a specific feature file:

```sh
npx cucumber-js tests/features/authentication/login.feature
```

Execute multiple feature files:

```sh
npx cucumber-js tests/features/authentication/ tests/features/documentos-electronicos/
```

---

## Viewing Test Reports

After test execution, Serenity reports are automatically generated.

### Open HTML Report

```sh
npm run open-report
```

This command opens the Serenity HTML report located at:

```
target/site/serenity/index.html
```

### Report Location

Reports are stored in the following directories:

- **Serenity HTML Report:** `target/site/serenity/`
- **Cucumber JSON Report:** `reports/cucumber-report.json`
- **Screenshots:** `reports/screenshots/`

---

# Project Structure

This repository contains automated tests using Playwright and Cucumber, implemented in TypeScript following the **Screenplay Design Pattern**. The structure is organized to improve maintainability and scalability.

```
playwright-screenplay-project/
│
├── src/                                    # Source code
│   ├── screenplay/                         # Screenplay pattern implementation
│   │   ├── abilities/                      # Actor capabilities
│   │   │   ├── browse-the-web.ts
│   │   │   └── call-an-api.ts
│   │   │
│   │   ├── tasks/                          # High-level business tasks
│   │   │   └── electronic-documents/
│   │   │       ├── debit-note/
│   │   │       │   └── create-debit-note.ts
│   │   │       └── credit-note/
│   │   │           └── create-credit-note.ts
│   │   │
│   │   ├── interactions/                   # Low-level UI interactions
│   │   │   ├── common/
│   │   │   │   ├── buttons/
│   │   │   │   │   └── click-on.ts
│   │   │   │   └── inputs/
│   │   │   │       └── fill-field.ts
│   │   │
│   │   ├── questions/                      # UI state queries
│   │   │   ├── authentication/
│   │   │   │   ├── login/
│   │   │   │   │   └── dashboard-is-visible.ts
│   │   │   │   └── session/
│   │   │   │       └── current-user-name.ts
│   │   │
│   │   ├── ui/                             # Lean Page Object Pattern
│   │   │   ├── authentication/
│   │   │   │   ├── login/
│   │   │   │   │   └── login-page.ts
│   │   │   │   └── password/
│   │   │   │       └── forgot-password-page.ts
│   │   │
│   │   └── interfaces/                     # TypeScript interfaces
│   │       ├── authentication/
│   │       │   ├── credentials/
│   │       │   │   └── user-credentials.interface.ts
│   │       │   └── response/
│   │       │       └── auth-response.interface.ts
│   │
│   ├── utils/                              # Utility functions
│   │    ├── helpers/
│   │       ├── date-helper.ts
│   │       ├── string-helper.ts
│   │       └── data-reader-helper.ts
├── tests/                                   # Test files
│   ├── login/                    # Module: Login .
│   │   ├── features/
│   │   │   └── login.feature
│   │   └── steps-definitions/
│   │       └── login.steps.ts
│   │
│   ├── electronic-documents/                # Module: Electronic Documents
│   │   ├── features/
│   │   │   ├── debit-note.feature
│   │   │   └── credit-note.feature
│   │   └── steps-definitions/
│   │       ├── debit-note.steps.ts
│   │       └── credit-note.steps.ts
│   │
│   ├── common/                              # Reusable common steps
│   │   └── parameters.step.ts
│   │
│   └── support/                             # Cucumber configuration
│       ├── hooks.ts
│       └── world.ts
│
├── test-data/                              # Test data files
│   ├── authentication/
│       ├── valid-users.json
│       └── invalid-users.json
│
├── scripts/                                # Utility scripts
│   ├── run-playwright.sh
│
├── .gitignore                              # Git ignore configuration
├── .env.example                            # Environment variables template
├── .env                                    # Local environment variables (git ignored)
├── cucumber.js                             # Cucumber configuration
├── docker-compose.yml                      # Docker compose configuration
├── Dockerfile                              # Docker image configuration
├── eslint.config.mjs                       # ESLint configuration
├── playwright.config.ts                    # Playwright configuration
├── sonar-project.properties                # SonarQube configuration
├── tsconfig.json                           # TypeScript configuration
├── package.json                            # Node.js dependencies and scripts
└── README.md                               # Project documentation
```

---

## Key Directories Explanation

### 📁 **`src/screenplay/`**

Contains the implementation of the Screenplay Pattern:

- **abilities/**: Define what actors can do
- **tasks/**: High-level business workflows
- **interactions/**: Low-level UI actions
- **questions/**: Queries to validate UI state
- **ui/**: Page Object Model with selectors
- **interfaces/**: TypeScript type definitions

### 📁 **`tests/`**

Contains executable test files:

- **features/**: Gherkin scenarios (`.feature` files)
- **step-definitions/**: TypeScript implementations of steps

### 📁 **`test-data/`**

Contains test data in JSON format, organized by modules.

### 📁 **`scripts/`**

Contains utility bash scripts for automation tasks.

---

## Authors

- [CCXC](https://github.com/ccxcus)
