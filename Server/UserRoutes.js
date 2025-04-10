const express = require("express");
const router = express.Router();
const { createUser } = require("./UserController");
const { deleteUser } = require("./UserController");

router.post("/", createUser);

router.get("/", (req, res) => {
    console.log("GET request to /api/users received");
    res.status(200).json({ message: "API is working" });
});

router.post("/delete", (req, res, next) => {
    console.log("DELETE request received at /api/users/delete");
    next();
}, deleteUser);

module.exports = router;
