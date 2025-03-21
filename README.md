# Next.js CLI Templating Starter

A CLI tool to quickly scaffold a Next.js project with a UI framework of your choice. This CLI helps developers speed up the process of setting up a Next.js project with preconfigured UI libraries, Storybook, and Playwright for testing.

## Installation

To install the CLI globally, run:

```sh
npm link
```

## Usage

Run the following command to create a new Next.js project:

```sh
npm create-next-ui
```

You will be prompted to select a UI framework from the following options:

```sh
? Select a UI framework:
  ◉ shadcn/ui
  ◉ Tailwind CSS only
  ◉ Material UI
  ◉ Chakra UI
```

Once selected, the corresponding template will be cloned and set up on your system.

## How It Works

1. **User Runs the CLI**  
   The command `npm create-next-ui` is executed.

2. **UI Framework Selection**  
   A prompt appears for the user to select a UI framework.

3. **Project Cloning**  
   Based on the selection, the corresponding Next.js starter template is cloned.

4. **Setup Complete**  
   The project is ready with the chosen UI framework.

## Example

To create a new Next.js project with **Tailwind CSS**, run:

```sh
npm create-next-ui
```

Select `Tailwind CSS only` when prompted. This will generate a Next.js project preconfigured with Tailwind.

## Features

- **Fast & Simple** – Quickly set up a Next.js project with your preferred UI framework.
- **Supports Popular UI Libraries** – Choose from `shadcn/ui`, `Tailwind CSS`, `Material UI`, or `Chakra UI`.
- **Automated Setup** – The CLI handles cloning and setting up the project.
- **Storybook Support** – Integrated with Storybook for building UI components in isolation.
- **Playwright Testing** – Includes Playwright for end-to-end testing.
- **Component Generation** – Easily generate new components using predefined commands.

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or later recommended)
- **npm** or **yarn**

## Storybook Setup

Storybook is included for UI component development. To start Storybook, run:

```sh
npm run storybook
```

This will launch Storybook in your browser where you can view and test UI components.

To build Storybook for production:

```sh
npm run build-storybook
```

## Generating Components with Plop

Plop is used to generate components quickly with predefined templates. To generate a new component, run:

```sh
npm run plop
```

Follow the prompts to create a new component. Alternatively, you can specify a component name directly:

```sh
npm run plop -- component <ComponentName>
```

This will create a new component inside the appropriate directory with necessary files.

## Playwright Testing

Playwright is used for automated end-to-end testing. To run Playwright tests, use:

```sh
npx playwright test
```

To open the Playwright UI after running tests:

```sh
npx playwright show-report
```

Playwright ensures your UI behaves correctly across different browsers and environments.

### Writing Tests

To create a new test file for a component, add a file inside the `tests` directory following this pattern:

```sh
tests/<ComponentName>.spec.ts
```

Run the test using:

```sh
npx playwright test tests/<ComponentName>.spec.ts
```

This will execute tests for the specified component.
