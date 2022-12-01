const express = require("express");
const foundItems = express.Router();

const {
  getAllUserFoundItems,
  getFoundItemByUserID,
  postNewFoundItem,
  updateFoundItem,
  deleteFoundItem,
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
  const getUserFoundItem = await getFoundItemByUserID(id);

  console.log("the id: ", id);
  if (getUserFoundItem) {
    console.log("=== GET all user found items", getUserFoundItem, "===");
    res.status(200).json(getUserFoundItem);
  } else {
    res.status(404).send("user's foundItems not found");
  }
});

foundItems.post("/", async (req, res) => {
  const newFoundItem = {
    foundUserId: req.body.foundUserId,
    itemsId: req.body.itemsId,
    status: req.body.status,
  };

  const createFoundItem = await postNewFoundItem(
    newFoundItem.foundUserId,
    newFoundItem.itemsId,
    newFoundItem.status
  );

  if (createFoundItem) {
    console.log("=== POST found item", createFoundItem, "===");
    res.status(201).json(createFoundItem);
  } else {
    res.status(404).send("found item was not created");
  }
});

foundItems.put("/:id", async (req, res) => {
  const { id } = req.params;

  const updatedFoundItemData = {
    foundUserId: req.body.foundUserId,
    itemsId: req.body.itemsId,
    status: req.body.status,
  };

  const updateItemFound = await updateFoundItem(
    id,
    updatedFoundItemData.foundUserId,
    updatedFoundItemData.itemsId,
    updatedFoundItemData.status
  );

  if (updateItemFound) {
    console.log("=== PUT found item", updateItemFound, "===");
    res.status(200).json(updateItemFound);
  } else {
    res.status(404).send("found item not updated");
  }
});

foundItems.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deleteFound = await deleteFoundItem(id);

  if (deleteFound.id) {
    console.log("=== DELETE found item by ID", deleteFound, "===");
    res.status(200).json(deleteFound);
  } else {
    res.status(404).send("Cannot delete foundItem: foundItem not found");
  }
});

module.exports = foundItems;
