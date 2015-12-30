'use strict';

/**
 * @ngdoc function
 * @name concerthistoryApp.controller:VenuedetailCtrl
 * @description
 * # VenuedetailCtrl
 * Controller of the concerthistoryApp
 */
angular.module('concerthistoryApp')
  .controller('VenuedetailCtrl', function ($scope, $stateParams, events) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.venueID = $stateParams.venueID;
    $scope.events = events;
  });
