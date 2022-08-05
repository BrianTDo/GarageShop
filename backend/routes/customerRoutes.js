const express = require("express");
const router = express.Router();
const {
  getCustomers,
  setCustomer,
} = require("../controllers/customerController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getCustomers).post(setCustomer);

module.exports = router;
