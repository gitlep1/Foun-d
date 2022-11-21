const express = require("express");
const foundItems = express.Router();

const {
  getAllUserFoundItems,
  getFoundItemByUserID,
} = require("../queries/foundItems");

foundItems.get("/", async (req, res) => {
  // const userFoundItems = {
  //   userId: req.body.userId,
  // };

  const allFoundItems = await getAllUserFoundItems();

  if (allFoundItems) {
    console.log("=== GET user found items", allFoundItems, "===");
    res.status(200).json(allFoundItems);
  } else {
    res.status(404).send("Cannot find any FoundItems");
  }
});

foundItems.get("/:id", async (req, res) => {
  const { id } = req.params;
  const getAFoundItem = await getFoundItemByUserID(id);

  if (getAFoundItem.length > 0) {
    console.log("=== GET found item by ID", getAFoundItem, "===");
    res.status(200).json(getAFoundItem);
  } else {
    res.status(404).send("foundItems not found");
  }
});

module.exports = foundItems;
