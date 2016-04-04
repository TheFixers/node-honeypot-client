Node Honeypot Client
=====================
Honeypot Client using NodeJS, NPM, React, Webpack, and ES6 to parse JSON responses from Honeypot Server 


Navigation
----------
[Node Honeypot Client](#node-honeypot-client) |
[Requirements](#requirements) |
[Folder Structure](#folder-structure) |
[Installation](#installation) |
[Development](#development) |
[Deployment](#deployment) |
[Contributions](#contributions) |
[Team](#team) |
[Copyright](#copyright) |
[Licence](#licence) |
[Contact](#contact)


Requirements
------------
This project assumes you have Node and the following global NPM packages installed:
<ul>
<li> Node </l1>
<li> Babel </li>
<li> Webpack </li>
<li> Webpack Dev Server (optional) </li>
</ul>

Folder Structure
----------------
<pre>
.
├── dist
└── src
    ├── js
    │   ├── actions
    │   ├── api
    │   ├── components
    │   │   ├── detail
    │   │   ├── footer
    │   │   ├── header
    │   │   ├── list
    │   │   ├── pagination
    │   │   ├── results
    │   │   └── search
    │   ├── constants
    │   ├── dispatchers
    │   ├── mixins
    │   ├── modules
    │   ├── static
    │   └── stores
    └── styles

20 directories

</pre>

Installation
------------
<ul>
<li> Install Node.js: Click for info <a href='https://nodejs.org/en/download/'>here</a></li>
<li> Install Global NPM modules: type <code>npm install babel webpack webpack-dev-server -g</code></li>
<li> Install dependencies: go to your root project directory and type <code>npm install</code></li>
</ul>

Development
-----------------------
To develop, from the project's root directory, use the command <code>npm start</code>. This will fire up the app at `localhost:8080`. This will also run the `gulp sass` task.

Deployment
----------
To deploy, from the project's root directory, use the command <code>npm build</code>. This will compile all JS and dependencies into `bundle.js` in the `dist/` folder. This will also run the `gulp sass` task. From here, just point your browser to `./dist/index.html`. 

Contributions
-------------
I would love for other people to contribute to this and see what kind of cool functionality we could get going. All work must be done on branches and pull requests can be moderated by admins. :)

#### General workflow
* `git branch <new branch>`
* `git checkout <new branch>`
* `git push -u origin <new branch>`

Team
----
<ul>
<li>@rabbitfighter81</li>
<li>@redragonx</li>
</ul>

Copyright
---------
&copy; 2016 Joshua Michael Waggoner 

Licence
-------
MIT

Contact
-------
Email: <a href="rabbitfighter@cryptolab.net">rabbitfighter@cryptolab.net</a>
