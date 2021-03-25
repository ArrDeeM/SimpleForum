# Table of Contents
- [Project Setup (Continued)](#Project-Setup-(Continued))
  - [Setting Up the MySQL Database](##Setting-Up-the-MySQL-Database)
  - [Running the Back-End](##Running-the-Back-End)


# Project Setup (Continued)
## Setting Up the MySQL Database
Connect to your MySQL server and execute the `Database.sql` script file by using the command `source Database.sql` while in the `database` directory

## Running the Back-End
Assuming that the forum database has been set up (instructions [above](##Setting-Up-the-MySQL-Database)) correctly, download the necessary dependencies by running:
```
yarn
```
Once the dependencies have been downloaded, run the following command to get the back-end started:
```
yarn start
```
The back-end should be up and running at this point (indicated by a message saying "Back-end is up and running!")
