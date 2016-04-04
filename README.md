# node-honeypot-client
Honeypot Client using NodeJS, NPM, React, Webpack, and custom modules to parse JSON responses from Honeypot Server

## This project assumes you have Node and the following global NPM packages installed 
* `node`
* `babel`
* `webpack`
* `webpack-dev-server`

### Example of installing global NPM packages
`npm install babel webpack webpack-dev-server -g`

##Installation

Use the following commands from the root directory...

### Installing node dependencies
* `npm install` - installs all node dependancies from `package.json`

### Build `bubndle.js`
* `gulp build`
If you do this, all you have to do is point your browser to `./dist/index.html` to run without `webpack-dev-server`

### Development on `webpack-dev-server`
* `npm start`

### Gulp Sass task (included in `npm start` and `npm build` but can be run separately)
* `gulp sass`

## Contributions
Please make sure all commits from this point on are done on branches, which I (@rabbitfighter81) will pull in after checking. This will allow for a smoother workflow moving forward with more than one team member.

* `git branch <new branch>`
* `git checkout <new branch>`
* `git push -u origin <new branch>`

## Team
* @rabbitfighter81
* @redragonx

## License
The MIT License (MIT)
Copyright (c) 2016 RFS
