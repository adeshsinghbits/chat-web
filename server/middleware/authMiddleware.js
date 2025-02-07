import jwt from "jsonwebtoken";
import User from "../Models/User.Model.js";

const verifyToken = async  (req, res, next) => {
    
    const token = req.cookies.authToken;

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select("-password"); 
        if (!user) return res.status(404).json({ error: "User not found" });
        req.user = user; 
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

export default verifyToken