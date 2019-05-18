let should = require('should');
let a = require('../index');

describe('404 Message', () => {
  it('should return badRequest_en message', () => {
    a.badRequest_en.should.equals('The API request is invalid or improperly formed. Consequently, the API server could not understand the request.');
  });
})
