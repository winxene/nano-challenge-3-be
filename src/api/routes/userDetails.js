const express = require("express");
const router = express.Router();
const {
  getReportUserDetailData,
} = require("../controllers/userDetailController");

router.get("/", getReportUserDetailData);

module.exports = router;
