require("dotenv").config();
const User = require("./UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const createUser = async (req, res) => {
    console.log(process.env.JWT_SECRET)
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
        
            return res.status(400).json({message: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10)
            console.log("Hashed password:", hashedPassword);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
            console.log("New user data:", newUser);

        await newUser.save();
            console.log("User saved:", newUser);
        const token = jwt.sign({userId: newUser._id}, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });
        console.log("Token generated:", token);

        res.status(201).json({user: newUser, token});
    }   catch (err) {
        console.error("Error creating user", err);
        res.status(500).json({message: "Error creating user"})
    }
};

const deleteUser = async (req, res) => {
    const { name, email, password } = req.body;
    console.log("Received data for deletion:", { name, email, password });

    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log("User not found");
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            console.log("Incorrect password");
            return res.status(400).json({ message: "Incorrect password" });

        }
         
        await User.findByIdAndDelete(user._id);
        console.log("User deleted successfully");

        
        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        console.error("Error deleting user", err);
        res.status(500).json({ message: "Error deleting user" });
    }
};

module.exports = {createUser, deleteUser};
