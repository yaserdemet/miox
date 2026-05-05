const User = require("../../models/users/index");

const getAllUser = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const total = await User.countDocuments();
  const data = await User.find().skip(skip).limit(limit);
  res.status(200).json({
    data: data,
    pagination: {
      total,
      limit,
      page,
      totalPages: Math.ceil(total / limit),
    },
  });
};

const createUser = async (req, res) => {
  const data = await User.create(req.body);
  res.status(201).json({
    message: "OK",
    data,
  });
};
