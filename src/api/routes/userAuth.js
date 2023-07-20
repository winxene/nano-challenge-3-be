const express = require("express");
const router = express.Router();
const { postUserAuthData } = require("../controllers/userAuthController");

router.post("/", postUserAuthData);

module.exports = router;
