
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Optional: debug logs (remove in production)
    console.log("Request Body:", req.body);
    console.log("Email:", email);

    // Check if admin exists
    const admin = await Admin.findOne({ email });

    console.log("Admin Found:", admin ? "Yes" : "No");

    if (!admin) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Send response (optionally omit password from admin object)
    const adminData = admin.toObject();
    delete adminData.password;

    res.status(200).json({
      token,
      admin: adminData,
    });
  } catch (error) {
    console.error("Login error:", error);

    res.status(500).json({
      message: "Internal server error",
    });
  }
};