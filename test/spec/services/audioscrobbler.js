'use strict';

describe('Service: audioScrobbler', function () {

  // load the service's module
  beforeEach(module('concerthistoryApp'));

  // instantiate service
  var audioScrobbler;
  beforeEach(inject(function (_audioScrobbler_) {
    audioScrobbler = _audioScrobbler_;
  }));

  it('should do something', function () {
    expect(!!audioScrobbler).toBe(true);
  });

});
