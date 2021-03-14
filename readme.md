# Facets Webapp v0.1
### Developer Setup
- [Nodenv](https://github.com/nodenv/nodenv) version control set on local file, currently 14.15.4 LTS
- [Yarn package manager](https://yarnpkg.com/getting-started)
- NB make sure to run `nodenv rehash` after installing yarn (or any npm packange) globally to for nodenv to find it

### Available Scripts
`yarn install` to install all the node modules needed to build the app
`npm run start` to run the development server, navigate to http://localhost:3000/
##### Internal Code Tooling

- [Webpack](https://webpack.js.org/concepts/) to bundle the js modules together
    - Webpack dev server for local development
- [Babel](https://babeljs.io/setup#via-config) within webpack to transpile the js into browser compatible versions

- Still need to pick a server communication (axios vs fetch)
- Redux as central state store
  - redux tooklit is the new way to go
- React hooks for local slices of state, useSelector, useDispatch
- React Router to create pages and links
  - Auth/Protected Routes to control authorized users/access

- CSS will be through MaterialUI, may not need loaders actually
- Page Components all built on MaterialUI base components unless explicity noted

TODO:
- local storage to hold session info
- page layouts refactored to a grid system

Eventually:
- will need a testing framework 
    - unit
    - integration
    - e2e



