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


  it('should be able to get status 200', function (done) {
      request(app)
            .get('/api/questions')
            .expect(200,done)

  })

  it('should get 3 questions', function (done) {
      request(app)
            .get('/api/questions')
            .then(response => {
                assert(response.body.length==3)
                done();
              })
  })

  it('should fetch questions in ascending order of id', function (done) {
      request(app)
            .get('/api/questions')
            .then(response => {
                assert(response.body[0].id < response.body[1].id )
                done();
              })
  })

  it('should be able to get correct titles in questions', function (done) {
      request(app)
            .get('/api/questions')
            .then(response => {
                assert(response.body[0].title === 'q1')
                assert(response.body[1].title === 'q2')
                done();
              })
  })
})
