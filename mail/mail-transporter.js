const nodemailer = require('nodemailer');

let mailTransport = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port:465,
    secure:true,
    // logger:true,
    // debug:true,
    secureConnection:false,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.MAIL_PASS
      // user:'anish@jabitsoft.com',
      // pass:'anish@2022'
    },
    tls:{
        rejectUnauthorized:true
    }
 });

 module.exports={mailTransport}