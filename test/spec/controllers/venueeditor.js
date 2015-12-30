'use strict';

describe('Controller: VenueeditorCtrl', function () {

  // load the controller's module
  beforeEach(module('concerthistoryApp'));

  var VenueeditorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VenueeditorCtrl = $controller('VenueeditorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VenueeditorCtrl.awesomeThings.length).toBe(3);
  });
});
