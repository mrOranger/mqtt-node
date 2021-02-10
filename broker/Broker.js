const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);


class Broker {
    constructor() {
        this.port = 8080;
        this.startBroker();
    }

    startBroker() {
        if (server.listening == false) {
            server.listen(this.port, function () {
                console.log('Server started and listening on port ' + this.port);
            });
        }
    }
}

exports.Broker = Broker