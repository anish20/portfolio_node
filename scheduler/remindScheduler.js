const schedule = require('node-schedule');
const { birthdaySendMailer } = require('../mail/sendBirthdayMailer');

// const birthdayRemindScheduler=async()=>{
//     const today=new Date().getDate();
//     const month=new Date().getMonth();
//     const monthName=new Date().toLocaleString('default', { month: 'long' })
//     const currentYear=new Date().getFullYear();
//     const scheduleDate = new Date(currentYear, month, today, process.env.BDAY_SCHEDULER_HOURS, process.env.BDAY_SCHEDULER_MINUTE, process.env.BDAY_SCHEDULER_SECOND); //Task Scheduler Current Year, DOB Month, DOB Date, Schedule Time 10:35:00 
//       let dateMonth=null;
//         if(today<=9){
//           dateMonth=`0${today}-${monthName}`;
//         }else{
//           dateMonth=`${today}-${monthName}`;
//         }
       
//     //Task scheduler 
//     const job = schedule.scheduleJob(scheduleDate, async function(){
//     const getData= await getCustomerByDateServices({DOB:dateMonth});
//     // send Bulk Send Enail Notifications
//     if(getData){
//       for(let i=0;i<getData?.length;i++){
       
//        const resultData= await updateCustomerDOBSendNotifcationServices({customerId:getData[i]?.customer_id,notificationName:'Birthday',isNotified:1})
//        if(resultData && resultData?.result=="exist"){
//         console.log('===========Birthday Wish already sent=======');
//        }else{
//         await birthdaySendMailer({name:getData[i]?.full_name,email:getData[i]?.email})
//         console.log('Today is my birthday');
//        }
      
//       }
//     } 
//     });
// }

const aniversaryRemindScheduler=async()=>{
  const date = new Date(2024, 4, 10, 9, 52, 0);
  const job = await schedule.scheduleJob(date, function(){
    console.log('Today is my birthday',date);
  });
}

const insurancePolicyExpiryRemindScheduler=async()=>{
  const date = new Date(2024, 4, 10, 9, 52, 0);
  const job = await schedule.scheduleJob(date, function(){
    console.log('Policy expiry',date);
  });
}

module.exports={
  // birthdayRemindScheduler,
  aniversaryRemindScheduler,
  insurancePolicyExpiryRemindScheduler
}