const Joi = require("joi");


const userLoginValidate=(req,res,next)=>{
    const schema = Joi.object({
        userid: Joi.string().required(),
        password: Joi.string().min(3).required(),
    });

    // schema options
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };

    const { error, value } = schema.validate(req.body, options);
    if (error) {
        // on fail return comma separated errors
        // next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
        return res.status(422).json({error:error?.details.map((item)=>{
            return{
                message:item.message
            }
        })})
    } else {
        // on success replace req.body with validated value and trigger next middleware function
        req.body = value;
        next();
    }
}   

module.exports={
    userLoginValidate
}