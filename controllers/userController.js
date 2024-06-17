const createHttpError = require("http-errors");
const { ErrorHandler } = require("../utils/error");
const { generateToken } = require("../utils/generateToken");
const { userLoginServices, getAllUserServices, createUpdateUserServices, deleteUserServices } = require("../services/userServices");

const loginController=async(req,res,next)=>{
    try {
        const result = await userLoginServices(req?.body);
        if(result){
           if(result.loginStatus=="loggedIn"){
        const token=await generateToken(result)// generate token
            //console.log("token",token)
           return res.status(200).json({data:{...result,accessToken:token}})
           }else{
               return res.status(404).json({data:result}) 
           }
       }
    } catch (error) {
        return next(new ErrorHandler(error.statusCode, error.message));
    }
}

const getAllUsersController=async(req,res,next)=>{
    try {
       const result=await getAllUserServices(req?.query);
       return res.status(200).json(result)
    } catch (error) {
      console.log(error)
        return next(new ErrorHandler(error.statusCode, error.message));
    }
}

const createUpdateUserController = async (req, res, next) => {
    try {
    //   console.log("req body  in createUser", req.body);
      // const { page = 1, pageSize = 25 } = req.query;
      const createUser = await createUpdateUserServices(req.body);
      let serviceResponse = { message: "success", data: createUser };
      res.status(200).json(serviceResponse);
    } catch (error) {
      console.log("error in createUser controller", error);
      // throw new ErrorHandler(error.statusCode, error.message);
      return next(new ErrorHandler(error.statusCode, error.message));
    }
  };
  const deleteUserController = async (req, res, next) => {
    try {
      const createUser = await deleteUserServices(req.query);
      let serviceResponse = { message: "success", data: createUser };
      res.status(200).json(serviceResponse);
    } catch (error) {
      console.log("error in createUser controller", error);
      // throw new ErrorHandler(error.statusCode, error.message);
      return next(new ErrorHandler(error.statusCode, error.message));
    }
  };


module.exports={
    loginController,
    getAllUsersController,
    createUpdateUserController,
    deleteUserController
}