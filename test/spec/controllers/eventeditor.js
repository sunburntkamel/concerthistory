'use strict';

describe('Controller: EventeditorCtrl', function () {

  // load the controller's module
  beforeEach(module('concerthistoryApp'));

  var EventeditorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventeditorCtrl = $controller('EventeditorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EventeditorCtrl.awesomeThings.length).toBe(3);
  });
});
