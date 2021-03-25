# SimpleForum
- [Table of Contents](#table-of-contents)
- [About](#about)
- [Project Setup](#project-setup)
  - [Software](#software)
    - [Recommended Software](#recommended-software)
    - [Necessary Software](#necessary-software)
  - [Getting the Project on Your Machine](#getting-the-project-on-your-machine)
  - [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)
  - [`app`](#app)
  - [`database`](#database)
  - [`server`](#server)
# About
  This project is a modular forum that displays a wide variety of searching methods.
# Project Setup
## Software
### Recommended Software
- Package Manager
  - Mac (or Linux): [homebrew](https://brew.sh/)
  - Windows: [chocolatey](https://chocolatey.org/)
- MySQL Workbench
  - Mac/Windows: [instructions](https://www.mysql.com/products/workbench/)
  - Brew installation command: `brew install --cask mysqlworkbench`
### Necessary Software
  - [Node.js](https://nodejs.org/)
    - Brew installation command: `brew install node`
    - Chocolatey installation command: `choco install nodejs`
  - [Yarn](https://yarnpkg.com/lang/en/)
    - Brew: `brew install yarn`
    - Choco: `choco install yarn`
  - [Git](https://git-scm.com)
    - Brew: `brew install git`
    - Choco: `choco install git.install`
  - [MySQL](https://www.mysql.com)
    - Brew: `brew install mysql`
    - Choco: `choco install mysql`
## Getting the Project on Your Machine
- Run `git clone <url>` where `<url>` is the url of the GitHub project
- This should download a copy of the project in a folder called `SimpleForum`
## Running the Project
To continue getting set up, please follow additional documentation located in [app](app/README.md) and [server](server/README.md) directories.
# Folder Structure
## `app`
- Contains all code related to the React front-end
- For additional information, please take a look at the [README.md](app/README.md) found in `app`
## `database`
- Contains SQL files to initialize database and definitions for procedures
## `server`
- Contains all code related to back-end
- For additional information, please take a look at the [README.md](server/README.md) found in `server`
