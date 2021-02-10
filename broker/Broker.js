const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);


class Broker {

    constructor() {
        this.port = 8080;
        this.startBroker(this.port);
    }

    startBroker(port) {
        if (server.listening == false) {
            server.listen(port, function () {
                console.log('Broker started and listening on port ' + port);
            });
        }
    }
}

exports.Broker = Broker