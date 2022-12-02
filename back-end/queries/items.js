const db = require("../db/dbConfig.js");

const getAllItems = async () => {
  try {
    const items = await db.any("SELECT * FROM items");
    return items;
  } catch (err) {
    return err;
  }
};

const getItemsByID = async (id) => {
  try {
    const item = await db.any("SELECT * FROM items WHERE id = $1", id);
    return item;
  } catch (err) {
    return err;
  }
};

const createItems = async (
  userId,
  itemName,
  itemImg,
  category,
  description,
  isFound,
  request,
  giveaway,
  pinLocation,
  neighborhood,
  borough,
  zipcode,
	status
) => {
  try {
    const newItems = await db.one(
      "INSERT INTO items (userId, itemName, itemImg, category, description, isFound, request, giveaway, pinLocation, neighborhood, borough, zipcode, status) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *",
      [
        userId,
        itemName,
        itemImg,
        category,
        description,
        isFound,
        request,
        giveaway,
        pinLocation,
        neighborhood,
        borough,
        zipcode,
				status
      ]
    );
    return newItems;
  } catch (error) {
    return error;
  }
};

const updateItems = async (
  id,
  userId,
  itemName,
  itemImg,
  category,
  description,
  isFound,
  request,
  giveaway,
  pinLocation,
  neighborhood,
  borough,
  zipcode,
	status
) => {
  try {
    const updateItem = await db.one(
      "UPDATE items SET userId = $1, itemName = $2, itemImg = $3, category = $4, description = $5, isFound = $6, request = $7, giveaway = $8, pinLocation = $9, neighborhood = $10, borough = $11, zipcode = $12, status = $13 where id=$14 RETURNING *",
      [
        userId,
        itemName,
        itemImg,
        category,
        description,
        isFound,
        request,
        giveaway,
        pinLocation,
        neighborhood,
        borough,
        zipcode,
				status,
        id,
      ]
    );
    return updateItem;
  } catch (error) {
    return error;
  }
};

const deleteItems = async (id) => {
  try {
    if (id === null || id === undefined) {
      return false;
    }
    const deletedItem = await db.one(
      "DELETE FROM items WHERE id=$1 RETURNING *",
      id
    );
    return deletedItem;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllItems,
  getItemsByID,
  createItems,
  updateItems,
  deleteItems,
};
