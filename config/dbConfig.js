const mysql = require('mysql2/promise');
let devDatabaseConnection={
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password:process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
}
let prodDatabaseConnection={
  host: process.env.PROD_MYSQL_HOST,
  user: process.env.PROD_MYSQL_USER,
  password:process.env.PROD_MYSQL_PASSWORD,
  database: process.env.PROD_MYSQL_DB,
  // waitForConnections: true,
  // connectionLimit: 10,
  // maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  // idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  // queueLimit: 0,
  // enableKeepAlive: true,
  // keepAliveInitialDelay: 0,
}
const isProduction=process.env.NODE_ENV==="development" ? devDatabaseConnection : prodDatabaseConnection;
console.log(isProduction)
const pool = mysql.createPool(isProduction);

module.exports={pool}