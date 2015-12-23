'use strict';

/**
 * @ngdoc service
 * @name concerthistoryApp.audioScrobbler
 * @description
 * # audioScrobbler
 * Service in the concerthistoryApp.
 */
angular.module('concerthistoryApp')
  .service('audioScrobbler', function ($resource, DOMAIN_URL, CLIENT_SECRET) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(DOMAIN_URL.audioscrobbler, {
      api_key: CLIENT_SECRET.as_api_key,
      method: '@method',
      user: '@user'
    });
  });
