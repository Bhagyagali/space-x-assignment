# space x launch Assignment
A baseline for server side rendering for space x launch Code Assignment. 

## Getting started
Clone the repo with
```https://github.com/Bhagyagali/SpaceX-launch.git```

Install dependencies with
```npm intsall``` or ```yarn intsall```

Run dev mode with
```npm start``` or ```yarn start```

Live Url
```https://xtcoding.herokuapp.com/```

Now open the browser and navigate to `http://localhost:8080` and you get your server rendered React app. You can inspect the page source and see that the html coming from your local server has all the nodes defined in the React app.

### A few notes
* I tried to complete all the feature whatever provided in the assignment 
* Each right hand side card is having "Successful Landing" field. Corresponding parameter to that variable is not found in the API response. I have talked to HR and the developer, so hard coding that as "false".No change made for filters. It works perfectly fine.
* I am starting the server with the `index.js` file which is in the root folder. This file loads the babel-register and sets up the babel plugins needed to run JSX and ESModules on the server.
* The node server needs to handle the static files from the `dist` folder.
* The entry point of the bundle is called `client.js` because it's the only part of our application that is not used for the server render.
* I have handled the SEO thing with react-helmet