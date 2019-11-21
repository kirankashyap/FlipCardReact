const {Client} = require('pg');
const connectionStringValue = process.env.DATABASE_URL || 'postgresql://postgres:tdd@localhost:5432/confdemo';
const client = new Client({
  connectionString: connectionStringValue
  //,user: 'postgres',
  //host: 'localhost',
  //database: 'confdemo',
  //password: 'tdd',
  //port: 5432

})
//console.log("DB at "+ connectionStringValue);

module.exports = client;
