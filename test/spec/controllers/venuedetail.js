'use strict';

describe('Controller: VenuedetailCtrl', function () {

  // load the controller's module
  beforeEach(module('concerthistoryApp'));

  var VenuedetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VenuedetailCtrl = $controller('VenuedetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VenuedetailCtrl.awesomeThings.length).toBe(3);
  });
});
