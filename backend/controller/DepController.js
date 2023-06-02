//this code can not  add one departemet with the same name more than once
const Department = require("../models/DepartmentModel");
Faculty = require("../models/FacultyModel");

exports.createDepartment = async (req, res) => {
  const { departmentName, facultyId, deanId } = req.body;
  const existingDepartment = await Department.findOne({
    departmentName,
    facultyId,
  });
  if (existingDepartment) {
    res
      .status(400)
      .json({ message: "Department with this name already exists." });
  } else {
    const department = new Department({ departmentName, facultyId, deanId });
    try {
      await department.save();
      const faculty = await Faculty.findById(facultyId);
      if (faculty) {
        console.log("Faculty found:", faculty);
        faculty.departments.push(department._id);
        await faculty.save();
        res.status(201).json(department);
      } else {
        res.status(404).json({ message: "Faculty not found." });
      }
    } catch (err) {
      res
        .status(500)
        .json({ message: "An error occurred while creating the department." });
    }
  }
};
////this code can add one departemet with the same name more than once
// const Department = require("../models/DepartmentModel");
// Faculty = require("../models/FacultyModel");

// exports.createDepartment = async (req, res) => {
//   const { departmentName, facultyId, deanId } = req.body;
//   const department = new Department({ departmentName, facultyId, deanId });
//   try {
//     await department.save();
//     const faculty = await Faculty.findById(facultyId);
//     if (faculty) {
//       console.log("Faculty found:", faculty);
//       faculty.departments.push(department._id);
//       await faculty.save();
//       res.status(201).json(department);
//     } else {
//       res.status(404).json({ message: "Faculty not found." });
//     }
//   } catch (err) {
//     if (err.code === 11000 && err.keyValue.departmentName === departmentName) {
//       res
//         .status(400)
//         .json({ message: "Department with this name already exists." });
//     } else {
//       res
//         .status(500)
//         .json({ message: "An error occurred while creating the department." });
//     }
//   }
// };
