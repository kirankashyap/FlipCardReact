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
})
