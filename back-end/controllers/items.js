const express = require("express");
const items = express.Router();

const {
  getAllItems,
  getItemsByID,
  createItems,
  updateItems,
  deleteItems,
} = require("../queries/items");

items.get("/", async (req, res) => {
  const allItems = await getAllItems();

  if (allItems) {
    console.log("=== GET itemss", allItems, "===");
    res.status(200).json(allItems);
  } else {
    res.status(404).send("Cannot find any items");
  }
});

items.get("/:id", async (req, res) => {
  const { id } = req.params;
  const getAItem = await getItemsByID(id);

  if (getAItem.length > 0) {
    console.log("=== GET item by ID", getAItem, "===");
    res.status(200).json(getAItem);
  } else {
    res.status(404).send("items not found");
  }
});

items.post("/", async (req, res) => {
  const newItems = {
    userId: req.body.userId,
    itemName: req.body.itemName,
    itemImg: req.body.itemImg,
    category: req.body.category,
    description: req.body.description,
    isFound: req.body.isFound,
    request: req.body.request,
    giveaway: req.body.giveaway,
    pinLocation: req.body.pinLocation,
    neighborhood: req.body.neighborhood,
    borough: req.body.borough,
    zipcode: req.body.zipcode
  };

    const createdItems = await createItems(
      newItems.userId,
      newItems.itemName,
      newItems.itemImg,
      newItems.category,
      newItems.description,
      newItems.isFound,
      newItems.request,
      newItems.giveaway,
      newItems.pinLocation,
      newItems.neighborhood,
      newItems.borough,
      newItems.zipcode
    );

    if (createdItems) {
      console.log("=== POST items", createdItems, "===");
      res.status(201).json(createdItems);
    } else {
      res.status(404).send("items not created");
    }
  });

items.put("/:id", async (req, res) => {
  const { id } = req.params;

	console.log(req.body.userid)

  const updatedItemsData = {
    userId: req.body.userid,
    itemName: req.body.itemname,
    itemImg: req.body.itemimg,
    category: req.body.category,
    description: req.body.description,
    isFound: req.body.isfound,
    request: req.body.request,
    giveaway: req.body.giveaway,
    pinLocation: req.body.pinlocation,
    neighborhood: req.body.neighborhood,
    borough: req.body.borough,
    zipcode: req.body.zipcode
  };
	console.log(updatedItemsData)

  const updatedItems = await updateItems(
    id,
    updatedItemsData.userId,
    updatedItemsData.itemName,
    updatedItemsData.itemImg,
    updatedItemsData.category,
    updatedItemsData.description,
    updatedItemsData.isFound,
    updatedItemsData.request,
    updatedItemsData.giveaway,
    updatedItemsData.pinLocation,
    updatedItemsData.neighborhood,
    updatedItemsData.borough,
    updatedItemsData.zipcode
  );

  if (updatedItems) {
    console.log("=== PUT items", updatedItems, "===");
    res.status(200).json(updatedItems);
  } else {
    res.status(404).send("items not found");
  }
});

items.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedItems = await deleteItems(id);
  console.log("=== DELETE items", deletedItems, "===");

  if (deletedItems.id) {
    res.status(200).json(deletedItems);
  } else {
    res.status(404).send("items not found");
  }
});

module.exports = items;
