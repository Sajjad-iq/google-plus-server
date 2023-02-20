const express = require("express")
router = express.Router()
SignUpControllers = require("../Controllers/SignUp")

router.post("/", SignUpControllers.AddUserAccount)

module.exports = router