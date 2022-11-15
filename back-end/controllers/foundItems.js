const express = require("express");
const foundItems = express.Router();

const {
  getAllFoundItems,
  getFoundItemByID,
} = require("../queries/foundItems");

foundItems.get("/", async (req, res) => {
  const allFoundItems = await getAllFoundItems();

  if (allFoundItems) {
    console.log("=== GET foundItemss", allFoundItems, "===");
    res.status(200).json(allFoundItems);
  } else {
    res.status(404).send("Cannot find any FoundItems");
  }
});

foundItems.get("/:id", async (req, res) => {
  const { id } = req.params;
  const getAFoundItem = await getFoundItemByID(id);

  if (getAFoundItem.length > 0) {
    console.log("=== GET item by ID", getAFoundItem, "===");
    res.status(200).json(getAFoundItem);
  } else {
    res.status(404).send("foundItems not found");
  }
});

module.exports = foundItems