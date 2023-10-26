const { Router } = require("express");
const route = Router();
const bcrypt = require("bcrypt");

const authController = require('../Controllers/auth')

route.post("/register", authController.register);

route.post("/admin/register", authController.adminRegister);
//login
route.post("/login", authController.login);

route.get("/users", authController.users);

module.exports = route;
