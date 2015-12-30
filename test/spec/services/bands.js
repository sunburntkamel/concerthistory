'use strict';

describe('Service: bands', function () {

  // load the service's module
  beforeEach(module('concerthistoryApp'));

  // instantiate service
  var bands;
  beforeEach(inject(function (_bands_) {
    bands = _bands_;
  }));

  it('should do something', function () {
    expect(!!bands).toBe(true);
  });

});
