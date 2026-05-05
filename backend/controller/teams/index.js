const Team = require("../../models/teams/index");
const getAllTeam = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const total = await Team.countDocuments();
  const data = await Team.find().skip(skip).limit(limit);
  res.status(200).json({ data : data, pagination : {
    total, limit, page, totalPages: Math.ceil(total / limit),
  }});
};

const createTeam = async (req, res) => {
  const data = await Team.create(req.body);
  res.status(201).json({
    message: "OK",
    data,
  });
};

const deleteTeam = async (req, res) => {
  const data = await Team.findByIdAndDelete(req.params.id);
  res.status(200).json(data);
};

const updateTeam = async (req, res) => {
  const data = await Team.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(data);
};

module.exports = {
  getAllTeam,
  createTeam,
  deleteTeam,
  updateTeam,
};
