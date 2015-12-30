'use strict';

/**
 * @ngdoc service
 * @name concerthistoryApp.events
 * @description
 * # events
 * Service in the concerthistoryApp.
 */
angular.module('concerthistoryApp')
  .service('events', function ($firebaseArray, Firebase, DOMAIN_URL) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var ref = new Firebase('https://'+DOMAIN_URL.fb_ch_events+'.firebaseio.com');
    return $firebaseArray(ref);
  });
