const db = require("../db/dbConfig.js");

const getAllUserFoundItems = async () => {
  try {
    const foundItems = await db.any(
      `SELECT * FROM found_items JOIN items ON foundUserId = userId WHERE foundUserId = userid AND itemsId = items.id`
    );
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

module.exports = {
  getAllUserFoundItems,
  getFoundItemByUserID,
};
