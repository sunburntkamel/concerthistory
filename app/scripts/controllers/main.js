'use strict';

/**
 * @ngdoc function
 * @name concerthistoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the concerthistoryApp
 */
angular.module('concerthistoryApp')
  .controller('MainCtrl', function ($scope, audioScrobbler, venues) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.venues = venues;
    console.log($scope.venues);
    // audioScrobbler.get({
    //   method: 'user.getInfo',
    //   user: 'sunburntkamel'
    // }, function(res) {
    //   console.log(res);
    //   $scope.topAlbums = res;
    // }, function(res) {
    //   console.log(res);
    // });
    /* Create a cache object */
    // $scope.cache = new LastFMCache();

    /* Create a LastFM object */
    // $scope.lastfm = new LastFM({
    //     apiKey    : 'f21088bf9097b49ad4e7f487abab981e',
    //     apiSecret : '7ccaec2093e33cded282ec7bc81c6fca'
    // });

    /* Load some artist info. */
    // $scope.lastfm.artist.getInfo({artist: 'The xx'}, {success: function(data){
    //     /* Use data. */
    //     console.log(data);
    //     $scope.data = data;
    // }, error: function(code, message){
    //     /* Show error message. */
    //     console.log(code);
    //     console.log(message);
    // }});
  });
