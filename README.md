# Server side rending project, with basic caching using web workers and browser cache

Basic Webpack - React - Redux - Node/Express project, practising server side rendering using polymorphic javascript.
Basic file caching, static and dynamic using chrome Caches api, capturing fetch from web workers.
Uses Sass (really basic UI/UX design) mobile first approach with media queries.
Few tests using jest + enzyme.

## Technologies stack

- React
- Redux
- ES6+
- Jest + Enzyme
- Express
- Webpack

## How to build and start

- Run 'npm install' on the main directory
- execute 'npm run build-and-run'
- Navigate to localhost:3000, localhost:3000/users, localhost:3000/admins

## Basic architecture

- An api servers data at localhost:5000
- The server side rendering Express api servers html according to the route, retrieving dynamically
  all the redux store data needed to build the html required by that route, achieved with static routes.
- public assets are served in public folder
- The application works as a PWA with regards to connectity: after first load try setting network connectity
  to offline: the app will try to connect, and after network failure it falls back to cached html for that specific route.
- Styles with Sass and mobile first, using Flexbox
