const express = require("express");
const { loginController, getAllUsersController, createUpdateUserController, deleteUserController } = require("../controllers/userController");
const { userLoginValidate } = require("../validations/userValidation");
const { authMiddleWare } = require("../middleware/tokenValidation");
const userRoute=express.Router();

userRoute.post("/login",userLoginValidate,loginController);
userRoute.get("/getAllUsers",getAllUsersController);
userRoute.post("/createUpdateUser",authMiddleWare,createUpdateUserController);
userRoute.delete("/deleteUser",authMiddleWare,deleteUserController);





module.exports={userRoute}