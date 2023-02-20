const express = require("express")
router = express.Router()
SignInController = require("../Controllers/SignIn")

router.post("/", SignInController.SignInHandler)
router.post("/Refresh", SignInController.SignInReFreshHandler)

module.exports = router