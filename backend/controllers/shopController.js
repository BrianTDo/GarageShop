const asyncHandler = require("express-async-handler");

const Shop = require("../models/shopModel");

// @desc Get shops
// @route GET /api/shops
// @access Private
const getShops = asyncHandler(async (req, res) => {
  const shops = await Shop.find();

  res.status(200).json(shops);
});

// @desc Set shop
// @route POST /api/shops
// @access Private
const setShop = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const shop = await Shop.create({
    id: Date.now().toString(),
    text: req.body.text,
  });

  res.status(200).json(shop);
});

// @desc Update shop
// @route PUT /api/shops/:id
// @access Private
const updateShop = asyncHandler(async (req, res) => {
  const shop = await Shop.findById(req.params.id);

  if (!shop) {
    res.status(400);
    throw new Error("Shop not found");
  }

  const updatedShop = await Shop.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedShop);
});

// @desc Delete shops
// @route DELETE /api/shops/:id
// @access Private
const deleteShop = asyncHandler(async (req, res) => {
  const shop = await Shop.findById(req.params.id);

  if (!shop) {
    res.status(400);
    throw new Error("Shop not found");
  }

  await shop.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getShops,
  setShop,
  updateShop,
  deleteShop,
};
