'use strict';

/**
 * @ngdoc service
 * @name concerthistoryApp.bands
 * @description
 * # bands
 * Service in the concerthistoryApp.
 */
angular.module('concerthistoryApp')
  .service('bands', function ($firebaseArray, Firebase, DOMAIN_URL) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var ref = new Firebase('https://'+DOMAIN_URL.fb_ch_bands+'.firebaseio.com');
    return $firebaseArray(ref);
  });
