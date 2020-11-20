# Spaced Repetition Capstone (Langly)

This app allows users to learn a new language using the scientifically proven spaced repetition method.
It also utilizes Linked Lists data structure to provide a more efficient client experience.

Here's the deployed version of `Langly`: [Langly](https://petful-client-indol.vercel.app/ "Langly")

### Demo Accounts:

- username: Beyonce
- password: Foobar!123

OR

- username: MagicSchoolBus
- password: Boobaz!123

## Table of Contents

<!-- - [Storytime](#Storytime)
- [Quick App Demo](#Quick-App-Demo)
- [A More Detailed Look](#A-More-Detailed-Look) -->

- [Tech Stack](#Tech-Stack)
  - [Front End](#Front-End)
  - [Testing](#Testing)
  - [Production](#Production)
- [Getting Started](#Getting-Started)
  - [All About Testing](#A-Deeper-Dive-into-Running-the-tests)
  - [Server Setup](#Server-Setup)
- [Upcoming Features](#Upcoming-Features)
- [About Me](#About-Me)
  - [GitHub Profile](https://github.com/cabejackson)
  - [LinkedIn](https://www.linkedin.com/in/caleb-jackson-cabe/)
- [Special Thanks](#Special-Thanks)

<!-- ## Storytime

As an avid reader myself, I'm always looking for my next great read! This app can help users do just that, by challenging their reading tastes and prompting them to read books they might've otherwise never considered.

This app will prompt the user to declare how many books they plan to read in the month (or any time frame, like spring break for example). Now, let's say they chose 4 books! The user will then view TBR cards and click on the cards to reveal the prompts on the backside. These prompts could be like, "Read a book with an elder protagonist" or "Read an anthology". Again, these prompts encourage readers to read outside of their comfort zones, but if the user feels like, "oh I already read a ton of anthology books", then they can flip that card back over and click another one! After viewing these prompts, users can then jot down their reading goals and click "Save This Goal".

Saving their goals is advantageous, because it allows users to keep track of prompts they've already completed. Note: saving goals is only available for users that have created an account.

Fun tidbit:
Will the user be repeatedly shown the same TBR cards? No way, lol that's no fun! Each time the user logs in and navigates to the "Create" page, the TBR cards are randomly generator to ensure the same cards aren't shown.

For example if the user says "show me 2 TBR cards on Wednesday" like this:
[Wednesday](https://imgur.com/a/gct0JEY)

Then on Thursday, the user says "show me 2 TBR cards" again different cards will be shown, like this:
[Thursday](https://imgur.com/a/nVWjIKN)

## Quick App Demo

![giphy](https://media.giphy.com/media/AUJnEt2yVTnyfViugs/giphy.gif)

## A More Detailed Look

### These links show screenshots of my app with the components they're referencing labeled as well.

Note: component names are listed in the green boxes

- [START HERE](https://imgur.com/a/BWxNwNw)
- [ABOUT](https://imgur.com/a/I0Ag4tv)
- [SIGN UP](https://imgur.com/a/k8Repzt)
- [LOGIN](https://imgur.com/a/MHjs696)
- [CREATE](https://imgur.com/a/NoXozEx)
- [GOAL](https://imgur.com/a/Foui1Vd) -->

## Tech Stack

### Front End

- React
  - Create React App
  - React Router
- HTML5
- CSS3

### Testing

- Cypress (Smoke tests)

### Production

- Deployed via Vercel

## Getting Started

Clone this repository to your local machine

```
git clone https://github.com/cabejackson/spaced-repetition.git spaced-repetition (client-side code)
```

Change directory into the cloned repository

```
cd spaced-repetition
```

Make a fresh start of the git history for this project

```
rm -rf .git && git init
```

Install the node dependencies

```
npm install
```

### Server Setup

Follow the [setup](https://github.com/cabejackson/spaced-repetition-api) instructions to get `Spaced Repetition Server` up and running.

## Scripts to get started

Run the tests -- see below

Start the application

```
npm start
```

## A Deeper Dive into Running the tests

This project uses [Cypress IO](https://docs.cypress.io) for integration testing using the Chrome browser.

Cypress has the following expectations:

- You have cypress installed (this is a devDependency of the project)
- You have your application running at http://localhost:3000.
  - You can change the address of this expectation in the `./cypress.json` file.
- Your `./src/config.js` is using http://localhost:8000/api as the `API_ENDPOINT`

To start the tests run the command:

```bash
npm run cypress:open
```

On the first run of this command, the cypress application will verify its install. Any other runs after this, the verification will be skipped.

The command will open up the Cypress application which reads tests from the `./cypress/integration/` directory. You can then run individual tests by clicking on the file names or run all tests by clicking the "run all tests" button in the cypress GUI.

Tests will assert against your running localhost client application.

You can also start all of the tests in the command line only (not using the GUI) by running the command:

```bash
npm run cypress:run
```

This will save video recordings of the test runs in the directory `./cypress/videos/`.

## Upcoming Features

### I'm working dilligently to incorporate these next user stories!

- As a user I can see an interesting graphical layout of my progress.
- As an administrator, I can see a list of all users current progress towards learning their vocab terms.

## About Me

_[GitHub Profile](https://github.com/cabejackson)
_[LinkedIn](https://www.linkedin.com/in/caleb-jackson-cabe/)

## Special Thanks

To Thinkful's Engineering Immersion Course TAs, instructors and my mentor (Praveen)!
