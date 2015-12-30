'use strict';

/**
 * @ngdoc function
 * @name concerthistoryApp.controller:VenueeditorCtrl
 * @description
 * # VenueeditorCtrl
 * Controller of the concerthistoryApp
 */
angular.module('concerthistoryApp')
  .controller('VenueeditorCtrl', function ($scope, $stateParams, geocodeAddress, venues) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    angular.extend($scope, {
      center: {
        lat: 38.0405837,
        lng: -84.5037164,
        zoom: 7
      },
      defaults: {
        scrollWheelZoom: false
      },
      events: {
        map: {
          enable: ['click', 'drag', 'load'],
          logic: 'emit'
        }
      }
    });
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.venue = $stateParams.venue;
    $scope.venues = venues;
    $scope.venueInfo = {};
    if ($scope.venue) {
      console.log($scope.venue);
      console.log($scope.venues);
      $scope.venueInfo = $scope.venues[$scope.venue];
      console.log($scope.venueInfo);
    }
    $scope.venueSuggest = function(go) {
      if ($scope.venueInfo.name.length > 2 || $scope.venueInfo.name.length === 0 || go === true) {
        geocodeAddress.get({
          query: $scope.venueInfo.name
        }, function(res) {
          $scope.extResults = res.features;
        });
      }
    };
    $scope.clearSearch = function() {
      $scope.venueInfo.name = '';
      $scope.venues = {};
      $scope.extResults = [];
    };
    $scope.addVenue = function(name, lat, lng, address) {
      $scope.venues.$add({
        name: name,
        center: {
          address: address,
          lat: lat,
          lng: lng
        }
      }).then(function(res) {
        console.log(res);

      });
    };
  });
