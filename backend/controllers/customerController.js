const asyncHandler = require("express-async-handler");

const Shop = require("../models/shopModel");
const User = require("../models/userModel");
const Customer = require("../models/customerModel");

// @desc Get customers by shop id
// @route GET /api/customers/:id
// @access Private
const getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find({ shop: req.params.id });
  res.status(200).json(customers);
});

// @desc Set customer
// @route POST /api/customer/
// @access Public
const setCustomer = asyncHandler(async (req, res) => {
  if (!req.body.shop) {
    res.status(404);
    throw new Error("Shop not found");
  }

  if (!req.body.name || !req.body.phone || !req.body.date) {
    res.status(400);
    throw new Error("Please fill out all fields");
  }

  const customer = await Customer.create({
    name: req.body.name,
    phone: req.body.phone,
    date: req.body.date,
    shop: req.body.shop,
  });

  Shop.findOne({ _id: customer.shop }).populate('customers')

  res.status(200).json(customer);
});

// @desc Delete customer
// @route DELETE /api/customer/:id
// @access Private
const deleteCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id)
  const shop = await Shop.findById(customer.shop)

  if (!customer) {
    res.status(404);
    throw new Error("Customer not found");
  }

  const user = await User.findById(req.user.id);

  // User check
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Check if logged in user is shop user
  if (shop.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  //Shop.updateMany({},{$pull: { customers: {id: req.params.id}}});

  customer.remove()

  res.status(200).json(customer);
});

module.exports = {
  getCustomers,
  setCustomer,
  deleteCustomer,
};
