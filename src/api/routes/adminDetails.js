const express = require("express");
const router = express.Router();
const {
  getReportAdminDetailData,
} = require("../controllers/adminDetailController");

router.get("/", getReportAdminDetailData);

module.exports = router;
