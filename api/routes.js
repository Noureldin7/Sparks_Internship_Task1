const express = require("express");
const router = express.Router();
const controller = require("./controller");
router.get('/view',controller.getCustomers);
router.get('/view/:id',controller.getCustomerById);
router.get('/transfer/:id',controller.getCustomerExceptId);
router.get('/search',controller.searchCustomerByName);
module.exports = router