const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {type: String, require: true, minlength: 2, maxlength: 255},
    password: { type: String, require: true, minlength: 3, maxlength: 1024 },
    firstName: { type: String, require: true, minlength: 2, maxlength: 50 },
    lastName: { type: String, require: true, minlength: 2, maxlength: 50 }
});

const User = mongoose.model("User", userSchema);

function validateUser(user) {
    const schema = Joi.object({
        email: Joi.string().min(2).max(255).required().email(),
        password: Joi.string().min(3).max(1024).required(),
        firstName: Joi.string().min(2).max(50).required(),
        lastName: Joi.string().min(2).max(50).required(),
    });
    return schema.validate(user);
}

exports.User = User;
exports.userSchema = userSchema;
exports.validateUser = validateUser;