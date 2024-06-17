const { mailTransport } = require("./mail-transporter");
const path=require("path");
const ejs=require("ejs");


const palicyRenewalSendMailer=async(mailData)=>{
    if(mailData){
    const templatePath=path.join(__dirname,"../views/PolicyRenewTemplate.ejs");
   
    const dataRenderFile=await ejs.renderFile(templatePath, {email:mailData?.email,name:mailData?.name,policy_no:mailData?.policy_no,customer_id:mailData?.customer_id,issue_date:mailData?.issue_date,expiry_date:mailData?.expiry_date});
    if(1==1){
    // const {from,to,subject,htmlData}=mailProps
    const mailOptions = {
        from:'"Policyplace" <anish@jabitsoft.com>',
        to:mailData && mailData?.email,
        subject:`Policy Renewal `,
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
 }

 module.exports={
    palicyRenewalSendMailer
 }