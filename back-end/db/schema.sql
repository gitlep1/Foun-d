DROP DATABASE IF EXISTS foun_d;
CREATE DATABASE foun_d;

\c foun_d;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id SERIAL UNIQUE NOT NULL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    profileImg TEXT UNIQUE,
    address TEXT,
    zipcode INT,
    rating INT,
    finder BOOLEAN DEFAULT false,
    joinedDate TIMESTAMP DEFAULT NOW()
);