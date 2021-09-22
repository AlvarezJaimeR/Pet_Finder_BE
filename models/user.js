const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {type: String, require: true, minlength: 2, maxlength: 255},
    password: { type: String, require: true, minlength: 3, maxlength: 1024 },
    firstName: { type: String, require: true, minlength: 2, maxlength: 50 },
    lastName: { type: String, require: true, minlength: 2, maxlength: 50 }
});

const User = mongoose.model("User", userSchema);

exports.User = User;
exports.userSchema = userSchema;