const express = require("express");
const router = express.Router();
const controller = require("./controller");
router.get('/view',controller.getCustomers);
router.get('/view/:id',controller.getCustomerById);
router.get('/transfers',controller.getTransfers);
// router.get('/transfer/:id',controller.getCustomerExceptId);
router.put('/transfer',controller.transferMoney);
router.get('/search/:id',controller.searchCustomerByName);
module.exports = router