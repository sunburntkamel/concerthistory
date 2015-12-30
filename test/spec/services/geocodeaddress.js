'use strict';

describe('Service: geocodeAddress', function () {

  // load the service's module
  beforeEach(module('concerthistoryApp'));

  // instantiate service
  var geocodeAddress;
  beforeEach(inject(function (_geocodeAddress_) {
    geocodeAddress = _geocodeAddress_;
  }));

  it('should do something', function () {
    expect(!!geocodeAddress).toBe(true);
  });

});
