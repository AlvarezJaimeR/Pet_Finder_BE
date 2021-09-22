const express = require("express");
const router = express.Router();
const {User} = require("../models/user");

//get all users
router.get("/", async(req,res) => {
    try {
        const users = await User.find();
        return res.send(users);
    }   catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

//get specific user
router.get("/:id", async(req,res) => {
    try {
        const user = await User.findById(req.params.id);
        return res.send(user);
    }   catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

module.exports = router;