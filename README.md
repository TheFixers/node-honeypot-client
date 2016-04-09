Node Honeypot Client
=====================
ReactJS/FLUX web-client for a Honeypot Server.


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
<li> Node + NPM </l1>
<li> Gulp </li>
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
<li> Install Node.js and NPM: Click for info <a href='https://nodejs.org/en/download/'>here</a></li>
<li> Install Global NPM modules: type <code>npm install gulp webpack webpack-dev-server -g</code></li>
<li> Install dependencies: go to your root project directory and type <code>npm install</code></li>
</ul>

Development
-----------------------
To develop, from the project's root directory, use the command <code>npm start</code>. This will fire up the app at `localhost:8080`. This will also run the `gulp sass` task.

Deployment
----------
To deploy, from the project's root directory, use the command <code>webpack</code>. Also, to compile the sass, use the command <code>gulp sass</code>. These commands will compile all JS dependencies into `bundle.js` and styles.css in the `dist/` folder. From here, just point your browser to `./dist/index.html`. 

Contributions
-------------
I would love for other people to contribute to this. All work should be done on feature-specific branches and pull requests will be moderated by admins. :)

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
