const express = require('express');
const router = express.Router();

const userControler = require("../controllers/userController");

router.get('/test', userControler.login)

module.exports = router;