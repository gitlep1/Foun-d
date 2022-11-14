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

DROP TABLE IF EXISTS items;
CREATE TABLE items (
    id SERIAL UNIQUE NOT NULL PRIMARY KEY,
    itemName TEXT NOT NULL,
    itemImg TEXT,
    category TEXT,
    description TEXT,
    found BOOLEAN,
    lost BOOLEAN,
    request BOOLEAN,
    giveaway BOOLEAN,
    pinLocation TEXT,
    neighborhood TEXT,
    borough TEXT,
    zipcode INT,
    itemDate TIMESTAMP DEFAULT NOW()
);