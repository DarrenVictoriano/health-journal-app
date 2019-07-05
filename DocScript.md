# Health-Journal-App Server Initialization

## Phase 1: Initilize Dependencies for the Server
1. Make a git [repo](https://github.com/DarrenVictoriano/health-journal-app)
2. Clone the repo to your local drive
3. Initilize the repo as an npm project `npm init`
4. Install Prod and Dev Dependencies within the server: `npm install <package name>`
    * Prod Dependencies:
        * [axios](https://www.npmjs.com/package/axios)
        * [dotenv](https://www.npmjs.com/package/dotenv)
        * [express](https://www.npmjs.com/package/express)
    * Dev Dependencies:
        * [concurrently](https://www.npmjs.com/package/concurrently)
        * [cross-env](https://www.npmjs.com/package/cross-env)
        * [if-env](https://www.npmjs.com/package/if-env)
        * [nodemon](https://www.npmjs.com/package/nodemon)

## Phase 2: Initilized MVC design
1. Create folders namely: `controllers`. `models`, `routes`, `test`, and `utils`
2. Create JS file for server: `server.js`

## Phase 3: Create React App for front end
1. Create react app `npx create-react-app client`
2. Delete unnecissary files:
    * client/src/App.css
    * client/src/App.test.js
    * client/src/index.css
    * client/src/logo.svg
    * serviceWorker.js
3. Create folder within the react app for organization:
    * components
    * pages
    * utils
4. Folder Structures should look like this:
    ```
    health-journal-app
    |-- client
    |   |-- node_modules
    |   |-- public (default)
    |   |-- src
    |   |   |-- components
    |   |   |-- pages
    |   |   |-- utils
    |   |   |-- App.js
    |   |   |-- index.js
    |   |-- .gitgnore
    |   |-- package-lock.json
    |   |-- package.json
    |-- controllers
    |-- models
    |-- node_modules
    |-- routes
    |-- test
    |-- utils
    |-- .gitignore
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- server.js
    |-- DocScript.md
    ```

## Phase 4: Setup Script
1. First setup script on the back-end: `health-journal-app/package.json`
    * `"main": "server.js"`
        * set the access point
    *
        ```json
        "start": "if-env NODE_ENV=production && npm run start:prod || npm run start:dev",
        "start:prod": "node server.js",
        "start:dev": "concurrently \"nodemon --ignore 'client/*'\" \"npm run client\"",
        "client": "cd client && npm run start",
        ```
        * when you run the app via `npm start`, the `"start"` script will run basically if the NODE_ENV=prod, it will run `"start:prod"` else `"start:dev"`
        * the `start:dev` uses the `concurrent` dependency to basically run the server.js and react app simultanously
    * `"install": "cd client && npm install",`
        * when you run `npm install` it will install all dependencies on froont-end and back-end (`./package.json` & `./client/package.json`)
    *
        ```json
        "build": "cd client && npm run build",
        "heroku-postbuild": "npm run build",
        ```
        * this is for prod deployment, usually you run `npm build` before deploying it to heroku.
    * `"test": "mocha -u tdd --reporter spec --exit"`
        * when you run `npm test` it will run the `mocha` npm package, however this is currently not implemented
2. Second, setup script for the fron-end: `health-journal-app/client/package.json`
    * `"proxy": "http://localhost:8080",` - add this line
        * by default, react runs on port 3000, adding our server port as a proxy will let the server handle the react app.

## Phase 5: Create the server and a basic react page
1. check `/health-journal-app/server.js`
2. check `/health-journal-app/client/src/App.js`
3. check `/health-journal-app/client/src/index.js`