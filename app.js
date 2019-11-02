var express = require("express");
const app = express();
const path = require('path');

const http = require("http");
const dbConnector = require("./DBConnector");

app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'ui/build')));

// get all todos
app.get('/api/questions', (req, res) => {
	 dbConnector.query('SELECT * FROM questions order by id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  })
});

//create new todo
app.post('/api/questions', (req, res) => {
	var questionText = req.body.title;
	console.log(questionText);
	var queryString = "INSERT INTO QUESTIONS (title) values ('"+questionText+"')";
	console.log(queryString);
	 dbConnector.query(queryString, (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  })


});
const PORT = process.env.port || 5000;
const server = http.createServer(app);
server.listen(PORT);
console.log("Running server at port "+ PORT);

module.exports = server;
