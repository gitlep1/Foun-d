const db = require("../db/dbConfig.js");

const getAllFoundItems = async () => {
  try {
    const foundItems = await db.any(`SELECT * FROM found_items 
    JOIN items ON foundUserId = userId 
    WHERE foundUserId = userId AND itemsId = items.id`);
    return foundItems;
  } catch (err) {
    return err;
  }
};

const getFoundItemByID = async (id) => {
  try {
    const foundItems = await db.any(`SELECT * FROM found_items 
    JOIN items ON foundUserId = userId 
    WHERE foundUserId = $1 AND itemsId = items.id`, id);
    return foundItems;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllFoundItems,
  getFoundItemByID
};