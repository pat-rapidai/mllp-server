var mllp = require('mllp-node');

var server = new mllp.MLLPServer('127.0.0.1', 1234);

// Subscribe to inbound messages
server.on('hl7', function (data) {
    console.log('received payload:', data);
});
