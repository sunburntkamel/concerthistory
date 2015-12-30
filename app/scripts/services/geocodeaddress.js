'use strict';

/**
 * @ngdoc service
 * @name concerthistoryApp.geocodeAddress
 * @description
 * # geocodeAddress
 * Service in the concerthistoryApp.
 */
angular.module('concerthistoryApp')
  .service('geocodeAddress', function ($resource, DOMAIN_URL, CLIENT_SECRET) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return $resource(DOMAIN_URL.mapbox+'geocoding/v5/mapbox.places/:query.json', {
      access_token: CLIENT_SECRET.mapbox_key,
      query: '@query',
      proximity: '@proximity'
    });
  });
