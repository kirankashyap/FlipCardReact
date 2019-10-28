var express = require("express");
const app = express();
const http = require("http");
const dbConnector = require("./DBConnector");

// get all todos
app.get('/api/questions', (req, res) => {
	 dbConnector.query('SELECT * FROM questions', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  })
});

//create new todo
app.post('/api/questions', (req, res) => {
	 dbConnector.query('INSERT INTO QUESTIONS (title) values (\'XYZ\')', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  })


});
const PORT = 5000;
const server = http.createServer(app);
server.listen(PORT);

module.exports = server;
