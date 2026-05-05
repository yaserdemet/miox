const express = require("express");
const router = express.Router();
const {
  getAllTeam,
  createTeam,
  deleteTeam,
  updateTeam,
} = require("../../controller/teams/index");

router.get("/", getAllTeam);
router.post("/", createTeam);
router.delete("/:id", deleteTeam);
router.put("/:id", updateTeam);

module.exports = router;
