'use strict';

/**
 * @ngdoc overview
 * @name concerthistoryApp
 * @description
 * # concerthistoryApp
 *
 * Main module of the application.
 */
angular
  .module('concerthistoryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'leaflet-directive',
    'config'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    // $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        data: {

        }
      })
      .state('venue', {
        url: '/venue/:venue',
        templateUrl: 'views/venueeditor.html',
        controller: 'VenueeditorCtrl',
        data: {}
      })
      .state('events', {
        url: 'events/:venue',
        templateUrl: 'views/venuedetail.html',
        controller: 'VenuedetailCtrl',
        data: {}
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
      $urlRouterProvider.otherwise('/');
  });
