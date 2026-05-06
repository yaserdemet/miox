const express = require("express");
const router = express.Router();
const { getAllUser, createUser, deleteUser } = require("../../controller/users/index");
const userValidation = require("../../validations/userValidation");

router.get("/", getAllUser);
router.delete("/:id", deleteUser);
router.post("/", userValidation, createUser);
// router.put("/:id")

module.exports = router;
