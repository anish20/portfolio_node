const jwt = require("jsonwebtoken");
// Generate jwt token
const generateToken=async(resultData)=>{
    let token = await jwt.sign(resultData, process.env.TOKEN_SECRET, {
        expiresIn: '30d',
        });
return token;
}

module.exports={generateToken}