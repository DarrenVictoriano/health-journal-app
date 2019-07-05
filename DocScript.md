# Health-Journal-App Server Initialization

### Phase 1: Initilize Dependencies for the Server
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

### Phase 2: Initilized MVC design
1. Create folders namely: `controllers`. `models`, `routes`, `test`, and `utils`
2. Create JS file for server: `server.js`

### Phase 3: Create React App for front end
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