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

- Still need to pick a server communication (axios vs fetch), might want promises
- Redux as central state store
  - redux tooklit is the new way to go, might want to switch over
- React hooks for local slices of state, useSelector, useDispatch
- React Router to create pages and links
  - Auth/Protected Routes to control authorized users/access in /utils/route_util

- CSS will be through MaterialUI, may not need loaders actually
- Page Components all built on MaterialUI base components unless explicity noted

Still Needs:
- add api key and test connection to backend
- connect through auth login and update redux state to hold user info and proper auth control
- utilize local storage/cookies to hold session info and load into state store on app load

- add sign up modals and wire in all the social media auths and token handlings

- page layouts refactored to a grid system

Eventually:
- will need a testing framework 
    - unit
    - integration
    - e2e

### Current Pages

New Vistors
`/` main marketing and landing page, but will force user to `/dashboard` if logged in, CTA Learn More
`/become-creator` CTA Sign Up

`/signup` single page w/form as placeholder for mocks
  - mock only, signup currently logs you in to dashboard
`/login` single page w/form
  - usable form, needs proper image asset and to be wired in


Existing Users
`/dashboard` landing page when logged in
  - status: top section mocked, no links
`/workflow` actions needed for campaigns
  - status: user profile card mocked, needs main section added
`/profile` user profile page
  - status: user profile card mocked, needs main section added
