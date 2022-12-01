const db = require("../db/dbConfig.js");

const getAllUserFoundItems = async () => {
  try {
    const foundItems = await db.any(`SELECT * FROM found_items`);
    return foundItems;
  } catch (err) {
    return err;
  }
};

const getFoundItemByUserID = async (id) => {
  try {
    const foundItems = await db.any(
      `SELECT * FROM found_items JOIN items ON foundUserId = userId WHERE foundUserId = userId AND found_items.id = $1`,
      id
    );
    return foundItems;
  } catch (err) {
    return err;
  }
};
const updateFoundItems = async (
  id,
	status
) => {
	console.log('id in put for found', id)
  try {
    const updateFoundItem = await db.one(
      "UPDATE found_items SET status=$1 where id=$2 RETURNING *",
      [
				status,
        id
      ]
    );
    return updateFoundItem;
  } catch (error) {
    return error;
  }
};

const postNewFoundItem = async (foundUserId, itemsId, status) => {
  try {
    const newFoundItem = await db.one(
      "INSERT INTO found_items (foundUserId, itemsId, status) VALUES($1, $2, $3) RETURNING *",
      [foundUserId, itemsId, status]
    );
    return newFoundItem;
  } catch (err) {
    return err;
  }
};

const updateFoundItem = async (id, foundUserId, itemsId, status) => {
  try {
    const updateFound = await db.one(
      "UPDATE items SET id = $1, foundUserId = $2, itemsId = $3, status = $4 RETURNING *",
      [foundUserId, itemsId, status, id]
    );
    return updateFound;
  } catch (error) {
    return error;
  }
};

const deleteFoundItem = async (id) => {
	console.log('id for delete', id)
  try {
    if (id === null || id === undefined) {
      return false;
    }
    const foundItems = await db.one(
      `DELETE FROM found_items WHERE id = $1 RETURNING *`,
      id
    );
    return foundItems;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllUserFoundItems,
  getFoundItemByUserID,
  postNewFoundItem,
  updateFoundItem,
  deleteFoundItem,
};
