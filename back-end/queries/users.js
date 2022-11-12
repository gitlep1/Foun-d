const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
  try {
    const users = await db.any("SELECT * FROM users");
    return users;
  } catch (err) {
    return err;
  }
};

const getUserByID = async (id) => {
  try {
    const user = await db.any("SELECT * FROM users WHERE id = $1", id);
    return user;
  } catch (err) {
    return err;
  }
};

const createUser = async (username, password, email, profileImg) => {
  try {
    const newUser = await db.one(
      "INSERT INTO users (username, password, email, profileImg) VALUES($1, $2, $3, $4) RETURNING *",
      [username, password, email, profileImg]
    );
    return newUser;
  } catch (error) {
    return error;
  }
};

const updateUser = async (
  id,
  username,
  password,
  email,
  profileImg,
  address,
  zipcode,
  rating,
  finder
) => {
  try {
    const updateUser = await db.one(
      "UPDATE users SET username = $1, password=$2, email=$3, profileImg=$4, address=$5, zipcode=$6, rating=$7, finder=$8 where id=$9 RETURNING *",
      [
        username,
        password,
        email,
        profileImg,
        address,
        zipcode,
        rating,
        finder,
        id,
      ]
    );
    return updateUser;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    if (id === null || id === undefined) {
      return false;
    }
    const deletedUser = await db.one(
      "DELETE FROM users WHERE id=$1 RETURNING *",
      id
    );
    return deletedUser;
  } catch (error) {
    return error;
  }
};

const checkIfEmailExists = async (email) => {
  const userEmail = await db.any("SELECT * FROM users WHERE email = $1", email);
  if (userEmail.length > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  getAllUsers,
  getUserByID,
  createUser,
  updateUser,
  deleteUser,
  checkIfEmailExists,
};
