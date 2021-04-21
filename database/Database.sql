CREATE DATABASE IF NOT EXISTS forum;
USE forum;

DROP TABLE IF EXISTS posts;
--Could add blob for images but not advisable
CREATE TABLE posts(
    `Post_Id` INT,
    `Username` VARCHAR(255),
    `Title` VARCHAR(255),
    `Body` TEXT
);

DROP TABLE IF EXISTS comments;
CREATE TABLE comments(
    `Post_Id` INT,
    `Username` VARCHAR(255),
    `Comment_Id` INT,
    `Body` TEXT
);

DROP TABLE IF EXISTS users;
CREATE TABLE users(
    `Username` VARCHAR(255),
    `Password` VARCHAR(255)
);

DROP TABLE IF EXISTS tags;
CREATE TABLE tags(
    `Tag` VARCHAR(255),
    `Post_Id` INT
);
