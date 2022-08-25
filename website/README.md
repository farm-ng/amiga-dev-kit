# Website
The amiga-dev-kit [documentation website is here](https://farm-ng.github.io/amiga-dev-kit/). **[\*](https://github.com/farm-ng/amiga-dev-kit/edit/main/website/README.md#-the-documentation-website-is-built-using-docusaurus-2)**



## Installation
In order to use docusaurus you'll need to install a couple libraries:
- Node.js version 16.14 or above (which can be checked by running `node -v`)
- Yarn >= 1.22.19 

#### For Linux: 
```
$ sudo apt install nodejs
```
Then
```
$ sudo npm install -g yarn
```

#### For MacOS: 
```
$ brew install npm
```
Then
```
$ brew install yarn
```
(yes, use a package manager to install a package manager... ;)

Then run this command:
```
$ yarn
```

### Local Development
```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build
```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment
Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:
```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

###### **\*** The documentation website is built using [Docusaurus 2](https://docusaurus.io/).
