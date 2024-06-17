require("dotenv").config({
    path: require("path").join(__dirname, "../.env"),
  });

  let BASE_URL= process.env.NODE_ENV==='development' ? process.env.APP_URL_DEV : process.env.APP_URL
  module.exports={
    BASE_URL
  }