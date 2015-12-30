'use strict';

describe('Service: venues', function () {

  // load the service's module
  beforeEach(module('concerthistoryApp'));

  // instantiate service
  var venues;
  beforeEach(inject(function (_venues_) {
    venues = _venues_;
  }));

  it('should do something', function () {
    expect(!!venues).toBe(true);
  });

});
