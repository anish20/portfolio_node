const { pool } = require("../config/dbConfig");
const { ErrorHandler } = require("../utils/error");

const userLoginServices=async(req)=>{
    try {
        let query=`select * from tbl_users where username='${req?.userid}' and password='${req?.password}'`;
        const [rows,fields]=await pool.query(query);
        if(rows.length>0){
            let { password,...restData }=rows[0];
              if(rows[0].status!==1){
                return {statusCode:404,loginStatus:'inactive',message:'User has been inactive!'}
              }
            // const newObj=Object.assign(restData,{statusCode:200,loginStatus:'loggedIn',message:"loggedin successully!",})
            const newObj={...restData,statusCode:200,loginStatus:'loggedIn',message:"loggedin successully!"}
              return newObj;
        }else{
            return {statusCode:404,loginStatus:'incorrect',message:'username & password is incorrect!'}
        }
    } catch (error) {
        throw new ErrorHandler(error.statusCode, error.message);
    }
}

const getAllUserServices=async({page,pageSize})=>{
  const offset = (page - 1) * pageSize;
  try {
       let query=`select * from tbl_users  where 1=1 `
       let queryCount=` select count(1) as count from tbl_users  where 1=1 `
          query += ` order by id desc`;
          if (pageSize && offset) {
          query += ` limit ${pageSize} offset ${offset}`;
          }
      //  console.log(query)
       const [rows,fields]=await pool.query(query);
       const [totalCount]=await pool.query(queryCount);
       console.log(totalCount)
       return {
          list:rows,
          count:totalCount[0].count
       }
  } catch (error) {
    console.log(error)
      throw new ErrorHandler(error.statusCode, error.message);
  }
}

const createUpdateUserServices = async (req) => {
 
  // save user to db
  if (req?.userid && req?.userid !== 0) {
    const [updatedUser] = await pool.query(
      ` UPDATE tbl_users set full_name=?, password=?,phone_no=?,gender=?,role=?,status=?,updated_on=CURRENT_TIMESTAMP where userid=? `,
      [req?.full_name, req?.password, req?.phone_no, req?.gender,req?.role,req?.status,req?.userid]
    );
    return "updated";
  } else {
  
    const [insertResult] = await pool.query(
      `INSERT INTO tbl_users(full_name,email,phone_no,gender,username,password,role,status,created_at)
       VALUES(?, ?,?,?,?,?,?,?,CURRENT_TIMESTAMP) `,
      [req?.full_name,req?.email, req?.phone_no, req?.gender, req?.username, req?.password,req.role,req?.status]
    );
    //console.log("user in createUser", user[0]);
    return "saved";
  }
};

const deleteUserServices = async (req) => {
 console.log("rrrrrrrrrrrrrrrrrrrrrrrr",req)
    const [updatedUser] = await pool.query(
      ` delete from tbl_users where userid=? `,
      [req?.id]
    );
    return "deleted";
};




module.exports={
  userLoginServices,
  getAllUserServices,
  createUpdateUserServices,
  deleteUserServices,
}