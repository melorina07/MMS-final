const Faculty = require("../models/FacultyModel");

// Create a new Faculty
//one faculty can not register with the same name morethan once
exports.createFaculty = async (req, res) => {
  const { name } = req.body;
  const faculty = new Faculty({ name });
  try {
    await faculty.save();
    res.status(201).json(faculty);
  } catch (err) {
    if (err.code === 11000 && err.keyValue.name === name) {
      res
        .status(400)
        .json({ message: "Faculty with this name already exists." });
    } else {
      res
        .status(500)
        .json({ message: "An error occurred while creating the faculty." });
    }
  }
};
