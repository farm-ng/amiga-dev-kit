# Website
The amiga-dev-kit [documentation website is here](https://farm-ng.github.io/amiga-dev-kit/). **[\*](https://github.com/farm-ng/amiga-dev-kit/tree/main/website#-the-documentation-website-is-built-using-docusaurus-2)**



## Installation
In order to use docusaurus you'll need to install a couple libraries:
- Node.js version 16.14 or above (which can be checked by running `node -v`)
- Yarn >= 1.22.19


### For Linux / WSL:

Install NVM / nodejs
```bash
sudo apt update
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc

# Verify install
nvm --version

# Install node
nvm install node
```

Install python dependencies
```bash
pip3 install .[dev]
```

Install yarn
```bash
sudo apt install npm
sudo npm install -g yarn

# Check version
yarn --version
```

### For MacOS:
Install npm
```bash
brew install npm
```
Install yarn
```bash
brew install yarn
# yes, use a package manager to install a package manager... ;)
```

## Adding images to the website

> *NOTE:* If you are already working in an active branch, this process works for branched versions of markdown files.
> If you are not, you will be prompted to create a new branch with your edits (to open a pull request) or commit the edits directly.

We want to keep this repository as lightweight as possible.
For this reason, please do not add any images to the filesystem of this repository.
If you'd like to add an image, you should edit the README
online through Github by:

1. Press the edit button in the top right corner of the markdown file
2. Drag & drop an image into the markdown file you are editing.
3. A link to the image should be automatically generated and formattedin the markdown file.

The generated link should look something like: https://user-images.githubusercontent.com/11846963/185976402-ff8c4c77-5a08-42b0-865f-d2840fc0b960.jpg

> *farm-ng employees:* Please back up the images you add to the website in the `Website/Assets/` directory of our shared drive.

## Local Development

### Build
```bash
cd website/
yarn
./run_pydoc-markdown
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Start yarn

```bash
yarn start
```

> This command starts a local development server and opens up a browser window.
> Most changes are reflected live without having to restart the server.


###### **\*** The documentation website is built using [Docusaurus 2](https://docusaurus.io/).
