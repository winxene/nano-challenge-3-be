const express = require("express");
const router = express.Router();
const {
  getReportDetailData,
} = require("../controllers/reportDetailController");

router.get("/", getReportDetailData);

module.exports = router;
