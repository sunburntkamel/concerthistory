angular.module('config', [])

.constant('ENV', 'localhost')

.constant('CLIENT_SECRET', {as_application_name:'concerthistory',as_api_key:'06523063f6ff63b32742c243fb929bbb',as_shared_secret:'f2c0604b647c3d2dcb19d4dbf5aff82b'})

.constant('DOMAIN_URL', {self:'http://localhost:9000/',audioscrobbler:'http://ws.audioscrobbler.com/2.0/'})

;