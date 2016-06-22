var util = require('util');
var parseString = require('xml2js').parseString;
var mqtt = require('mqtt');
var mqtt_client  = mqtt.connect('mqtt://iot');

var PORT = 4455;
var HOST = '0.0.0.0';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
  parseString(message, function (err, result) {
      var res = result.rc['$'];
      mqtt_client.publish('ml256/wiki/change', JSON.stringify(res));
  });
});

server.bind(PORT, HOST);




// This is what the output of xml2js looks like
//{ rc: 
//   { '$': 
//      { type: 'edit',
//        ns: '2',
//        title: 'User:Jimshoe',
//        rcid: '20006',
//        pageid: '1716',
//        revid: '19933',
//        old_revid: '19932',
//        user: 'Jimshoe',
//        minor: '',
//        oldlen: '1148',
//        newlen: '1146',
//        timestamp: '2016-04-15T04:07:23Z',
//        comment: 'spaces man',
//        wikiid: 'wikidb' },
//     tags: [ '' ] } }

