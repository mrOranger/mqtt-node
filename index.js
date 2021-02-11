const express = require('express');
const dbConnector = require('./models/Connector');
const brokerServer = require('./broker/Broker');
const app = express();

const PORT = 8081;
const databaseConnector = new dbConnector.Connector();
const broker = new brokerServer.Broker();


app.get('/names?:id', function (request, response) {
    hostName = request.hostname;
    httpVersion = request.httpVersion;
    requestUrl = request.url;
    console.log("======================");
    console.log("Incoming request [" + new Date().getTime() + "]");
    console.log("Host name: " + hostName);
    console.log("Url: " + requestUrl);
    console.log("HTTP version: " + httpVersion);
    const deviceId = request.query.id;
    databaseConnector.getBoxCode("SELECT * FROM codes WHERE DeviceID = '" + deviceId + "';", request, response);
});

app.listen(PORT, function () {
    console.log('Server listening on port ' + PORT);
});