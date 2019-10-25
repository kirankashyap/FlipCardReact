import express from 'express';
//import db from './db/db';
// Set up the express app
const app = express();

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'confdemo',
  password: 'tdd',
  port: 5432,
})

// get all todos
app.get('/api/questions', (req, res) => {
	 pool.query('SELECT * FROM questions', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
});
  
//create new todo
app.post('/api/questions', (req, res) => {
	 pool.query('INSERT INTO QUESTIONS (title) values (\'XYZ\')', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
  
  
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});