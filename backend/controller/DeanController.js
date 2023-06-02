const Admin = require("../models/AdminModel");
// const Question = require("../model/questtion");
const Department = require("../model/Department");
const Dean = require("../models/DeanModel");

///REGISRATIN OF TEACHER
exports.registerStaff = async (req, res) => {
  try {
    const { name, email, contact, password, departmentId } = req.body;

    // Check if department exists
    const existingDepartment = await Department.findById(departmentId);
    if (!existingDepartment) {
      return res.status(404).json({ error: "Department not found" });
    }
    // const existingCourse = await Course.findById(courseId);
    // if (!existingCourse) {
    //     return res.status(404).json({ error: 'course not found' });

    // }

    // Create new staff
    const staff = new Staff({
      name,
      email,
      contact,
      password,
      role: "staff",
      departmentId,
    });

    // Save staff to database
    await staff.save();

    // Add staff to department
    // await User.findByIdAndUpdate(departmentId, { $push: { students: student._id } });
    existingDepartment.staffs.push(staff._id);
    await existingDepartment.save();
    // existingCourse.teachers.push(teacher._id);
    // await existingCourse.save();

    res.status(201).json({
      message: "Staff created successfully",
      staff,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.UpdateStaff = async (req, res) => {
  try {
    const user = await Staff.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Staff not found",
      });
    }
    if (user.role !== "staff") {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to perform this action",
      });
    }

    const updatedUser = await Staff.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: "staff profile updated",
      user: updatedUser,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

//UPDATING TAECHER

// exports.seeStudent = async (req, res) => {
//     try {
//         const usr = await Student.find({ role: "student" });
//         if (!usr) {
//             res.status(404).json({ msg: "No student found" });
//         }
//         else {
//             res.json({ students: usr });
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ msg: "Server Error" });
//     }
// }

exports.seeStaff = async (req, res) => {
  const usr = await Staff.find({ role: "staff" });
  if (!usr) {
    console.log(error);
    res.json({ msg: "some error!" });
  } else {
    res.json({ user: usr });
  }
};

//deleting teacher
exports.deleteStaff = async (req, res) => {
  try {
    const usr = await Staff.findOneAndDelete({
      _id: req.params.id,
      role: "staff",
    });

    if (!usr) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json({ msg: "Deleted Success!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
