const request = require('supertest');
let app = require('../app');
const assert = require('assert');
const dbConnector = require("../DBConnector");

describe('API Tests', () => {

  before(function(done){
    //delete all rows in questions table
    var queryToRun = "delete from questions";
    dbConnector.query(queryToRun, (error, results) => {
      assert(!error);
    });

    //load sample data
    queryToRun = "insert into questions (title) values ('q1'); insert into questions (title) values ('q2'); insert into questions (title) values ('q3');"
    dbConnector.query(queryToRun, (error, results) => {
      done();
    });
  })

  after(function(done){
    //delete all rows in questions table
    var queryToRun = "delete from questions";
    dbConnector.query(queryToRun, (error, results) => {
      assert(!error);
      done();
    });
  })


  it('should get 3 questions @integrationTest', function (done) {
      request(app)
            .get('/api/questions')
            .then(response => {
                assert(response.body.length==3)
                assert(response.body[0].title === 'q1')
                assert(response.body[1].title === 'q2')
                done();
              })
  })

  it('should get questions in ascending order of id @integrationTest', function (done) {
      request(app)
            .get('/api/questions')
            .then(response => {
                assert(response.body[0].id < response.body[1].id);
                assert(response.body[1].id < response.body[2].id);
                done();
              })
  })
})
