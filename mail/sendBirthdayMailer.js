const { mailTransport } = require("./mail-transporter");
const path=require("path");
const ejs=require("ejs");


const birthdaySendMailer=async({name,email})=>{
    const templatePath=path.join(__dirname,"../views/BirthdayWishTemplate.ejs");
    const dataRenderFile=await ejs.renderFile(templatePath,{name});
    if(1==1){
    // const {from,to,subject,htmlData}=mailProps
    const mailOptions = {
        from:'"Policyplace" <anish@jabitsoft.com>',
        to:email,
        subject:`Birthday Wish `,
        html:dataRenderFile
   };
   
   mailTransport.sendMail(mailOptions, function(err, info) {
       if (err) {
         console.log(err)
       } else {
        //  console.log(info);
        console.log("Sent Email!!!!")
         return 1
       }
   });
}
 }

 module.exports={
  birthdaySendMailer
 }