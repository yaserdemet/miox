const express = require("express");
const app = express();
const database = require("./db/index");
const teamsRouter = require("./routes/teams/index");
const cors = require("cors");

database()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/teams", teamsRouter);




module.exports = app;
