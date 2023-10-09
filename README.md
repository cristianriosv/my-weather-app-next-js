# --- MyWeather Web App ---

The app consists of 1 screen, where the user can select a city (London, Amsterdam, Moscow, New York, and your home city as default) and see the weather of this city (temperature, icon of the current weather, weather name, pressure, wind, “feels like” and humidity). Also, users have
the possibility to reload this page to update weather data.

The project is created with Next.js and Typescript. For the styles I'm using tailwind to achieve a fast development and show a good and adaptive design.

## How to start

Create your .env from the .env.template file (local, development, production, etc) and set the two required api keys to connect to external services.

The project uses two different exteran services, you have the instructions to get the api keys in their websites:

- For ip geolocation: https://ipstack.com
- For current weather data: https://openweathermap.org/current

Use the package manager npm to install the packages in the project and the run the development server.

```bash
npm i
npm run dev
```

## Automated tests

Tests are managed with cypress.

To run e2e tests:
```bash
npm run test:e2e
```

Also is possible to run e2e tests headless:
```bash
npm run test:e2e:headless
```

Too run unit and components tests:
```bash
npm run test:components
```

All tests are in the cypress folder:
```bash
# cypress/
    Folder containing e2e, component and unit tests
```

## Project folder structure

For the project I have used a featured module structure. Even that this is a very small project, the featured module allows you to scale the application in a very clear way, puting focus on real general reusable components, utils, hooks, constants, etc. across the entire project, but also splitting the specified feature components, utils, hooks and constants to avoid mixing concepts and createing a very hard folder strucutre.

```bash
# src/features/
    This folder contains all the components, constants, utils and hooks that only matters to the feature.
# src/pages/
    This is the routing page folder from Next.js
# src/shared/
    Here we have the real components, constants, utils, hooks, etc. that are truly shared across the entire project
# src/styles/
    General styles for the application
```
## Feedback
For any feedback, please don't hesitate to contact me.