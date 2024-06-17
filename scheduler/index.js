const { birthdayRemindScheduler, aniversaryRemindScheduler, insurancePolicyExpiryRemindScheduler } = require("./remindScheduler")

const indexTaskSchedulder=async()=>{
    //console.log("index>>>>>>>>>>>>..")
    // await birthdayRemindScheduler();
    await aniversaryRemindScheduler();
    await insurancePolicyExpiryRemindScheduler();
}

module.exports={indexTaskSchedulder}