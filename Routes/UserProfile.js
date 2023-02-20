const express = require("express")
router = express.Router()
ProfileController = require("../Controllers/UserProfile")

router.put("/:id", ProfileController.EditUserAccount)

module.exports = router