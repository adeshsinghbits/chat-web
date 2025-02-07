import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../Models/User.Model.js";
import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    
    await User.create({ name, email, password: hashedPassword });
    
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists" });
    } else {
      res.status(500).json({ message: "Server error" });
    }
  
    
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.cookie("authToken", token, {
        httpOnly: true,
        secure: false, 
        sameSite: "lax",
        expires: new Date(Date.now() + 3600000)
    });
    res.json({message: "Logged in successfully",  token,  user: { id: user._id, name: user.name, email: user.email }, message: "Logged in successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Logout route
router.post("/logout",  (req, res) => {
  res.clearCookie("authToken");
  res.json({ message: "Logged out successfully" });
});

router.get("/check",  verifyToken,  async (req, res) => {
    try {
        
        res.status(200).json(req.user);
    } catch (error) {
      console.log("Error in checkAuth controller", error.message);
      res.status(500).json({ message: "Internal Server Error" });
    }
})

export default router;
