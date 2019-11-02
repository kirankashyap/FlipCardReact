const request = require('supertest');
let app = require('../app');
const assert = require('assert');


describe('API Tests', () => {
  it('should be able to get status 200', function (done) {
      request(app)
            .get('/api/questions')
            .expect(200,done)

  })

  it('should get >0 questions', function (done) {
      request(app)
            .get('/api/questions')
            .then(response => {
                assert(response.body.length !== 0)
                done();
              })
  })

  it('should fetch questions in ascending order of id', function (done) {
      request(app)
            .get('/api/questions')
            .then(response => {
                assert(response.body[0].id===1)
                assert(response.body[1].id===2)
                done();
              })
  })
})
