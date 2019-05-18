let should = require('should');

let conv = require('../index');
const restError = new conv({ lang: 'en' });

describe('404 Message', () => {
  it('should return badRequest_en message', () => {
    restError.badRequest().message.should.equals('The API request is invalid or improperly formed. Consequently, the API server could not understand the request.');
    restError.badRequest().status.should.equals(400);
  });
})
