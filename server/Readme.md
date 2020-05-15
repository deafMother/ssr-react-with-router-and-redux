# steps to set up ssr react

---

## one( install dependencies)

> install the dependencies like

        - react, react dom, redux... etc
        - webpack, babel... etc

## two(set up server)

- > set up the express server in the src/index.js
- > make a client folder in src to hold the client react app and add the react components(src/client)
- > import the home component (or any other component) to be initially rendered in the browser
- > set up the html template in the express response to inclode the string converted home component
- > specify the static directory(like sasy 'public' in this case), this directory will contain the bundled js file need by the browser

### three(configure server)

> configure the webpack.server.js in root dir

- specify the input output path and the bable loader
- at this point we are only sending the html but not the actual react js bundle so the page wond be interactive

## four(set the client bundle)

> configrue the client bundle to contain the react app which will be hydrated in the template

- give a "root" id the the html content rendered above in the express response
- create src/client/client.js (this will be the entry point of the react app in the browser)
- set it up like a normal index.js file we set up in any react app
- next step in to hydrate(it is just like render) this component to the 'root' element

        > configure the webpack.client.js in the root
             entry: "./src/client/client.js",
              output: {
                filename: "bundle.js",
                path: path.resolve(__dirname, "public"),
              },
              // this has to be outputed in the public directory

## five(set up the scripts in package.json)

- we need to run these tree scripts in devolopment however in production not need to run nodemon

```js

 "scripts": {

    // set up nodemon the watc for changes to the build/bundle.js and restart the node if any change
    "dev:server": "nodemon --watch build --exec node build/bundle.js",
    // start webpack to bundle the server code and rebuilt in case any changes
    "dev:build:server": "webpack --config webpack.server.js --watch",
    // start webpack to bundle the client side and watch it for changes
    "dev:build:client": "webpack --config webpack.client.js --watch",
   // execute all scriptss with one command
   "dev":"npm-run-all  --parallel *dev:*"
  },
```

**the basic set up is complete**

## six (refactoring )

- refactor the webpack config in the client and server to have a common babel loader using **webpack merge**
- current we need to run `npm dev:server` ,`dev:build:server` and `dev:build:client` to build and run the application ,now make the following changes to the script file to have a single command startup `npm run dev`

```js

 "scripts": {
   // execute all the scripts below with one command
   "dev":"npm-run-all  --parallel dev:*"

    // set up nodemon the watc for changes to the build/bundle.js and restart the node if any change
    "dev:server": "nodemon --watch build --exec node build/bundle.js",
    // start webpack to bundle the server code and rebuilt in case any changes
    "dev:build:server": "webpack --config webpack.server.js --watch",
    // start webpack to bundle the client side and watch it for changes
    "dev:build:client": "webpack --config webpack.client.js --watch",
  },
```

## seven (adding react router)

- react router is add: the routing needs to handle both the server side nd the client side

- for the server side we use static touter and provide the url from the req object

- for the client side we use the browser router like in normal react app

> we need two seperate router as the user might go starin to any ulr in the browser url bar and so the server needs to produce that particular component depending on the url

## eight (adding redux)

- we need to set up redux on both the cient side code and the server side code

- setup redux on the client side like in normal react apps (but not the reducers or the action creators not yet)

- for the server first set up the store

- make action creators and reducers that will be used in common for both the client side and server side

- add the reducers to the store in the client and the server

## nine(additional redux data fetching settings)

> note: when a particular page(component) is being rendered server side >the life cycle of that component doesnt execute as we are fetching only the html
> only when we send the client js bundle then only the component we
> execute like a normal react app, we can test it by removing the client js bundle
> we need to use additional settings to make this behaviour in the server side
