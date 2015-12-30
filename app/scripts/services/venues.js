'use strict';

/**
 * @ngdoc service
 * @name concerthistoryApp.venues
 * @description
 * # venues
 * Service in the concerthistoryApp.
 */
angular.module('concerthistoryApp')
  .service('venues', function ($firebaseObject, Firebase, DOMAIN_URL) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var ref = new Firebase('https://'+DOMAIN_URL.fb_ch_venues+'.firebaseio.com');
    return $firebaseObject(ref);
  });
