const express = require("express");
const router = express.Router();
const {
  getCustomers,
  setCustomer,
  deleteCustomer,
} = require("../controllers/customerController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get( getCustomers).post(setCustomer);
router.route("/:id").delete( deleteCustomer)

module.exports = router;
