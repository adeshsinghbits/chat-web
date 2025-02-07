import express from "express";
import User from "../Models/User.Model.js";
import Message from "../Models/Message.model.js";
import verifyToken from "../middleware/authMiddleware.js";

import { getReceiverSocketId, io } from "../lib/socket.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const myId = req.user._id;

    //console.log("userToChatId: ", userToChatId, "myId: ", myId);
    

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
    });
    console.log("senderId: ", senderId, "receiverId: ", receiverId);
    
    await newMessage.save();

    const receiverSocketId = getReceiverSocketId(receiverId);

    console.log("receiverSocketId: ", getReceiverSocketId(receiverId));
    
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
      
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};


const router = express.Router();

router.get("/users",  verifyToken, getUsersForSidebar);
router.get("/:id", verifyToken, getMessages);
router.post("/send/:id", verifyToken, sendMessage);

export default router;