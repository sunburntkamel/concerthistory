angular.module('config', [])

.constant('ENV', 'localhost')

.constant('CLIENT_SECRET', {as_application_name:'concerthistory',as_api_key:'06523063f6ff63b32742c243fb929bbb',as_shared_secret:'f2c0604b647c3d2dcb19d4dbf5aff82b',api_key:'backendrules',mapbox_key:'pk.eyJ1IjoiaHJjcm9uaW4iLCJhIjoiY2ZlNjVhMTgyMzUzMDIwNDc0ZDdmY2I0MzIzMjJiZWMifQ.PPae-cC2ouPkiR94oHEJBg'})

.constant('DOMAIN_URL', {self:'http://localhost:9000/',audioscrobbler:'http://ws.audioscrobbler.com/2.0/',mapbox:'https://api.mapbox.com/',gateway:'https://nightly.gateway.ridescout.com',fb_ch_venues:'ch-venues',fb_ch_events:'ch-events',fb_ch_bands:'ch-bands'})

;