const Data = require("../models/Data");

exports.getAllData = async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addData = async (req, res) => {
  const data = new Data({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    const newData = await data.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
