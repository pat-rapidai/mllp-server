var mllp = require('mllp-node');

var host = '127.0.0.1'
var port = 1234
var server = new mllp.MLLPServer('127.0.0.1', 1234);

console.log('Listening for HL7 messages on:', host, ':', port, '...')
console.log('\nPress ^C to exit\n')

// Subscribe to inbound messages
server.on('hl7', function (data) {
    console.log('received payload:', data);
});
