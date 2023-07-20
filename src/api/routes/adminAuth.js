const express = require("express");
const router = express.Router();
const { postAdminAuthData } = require("../controllers/adminAuthController");

router.post("/", postAdminAuthData);

module.exports = router;
