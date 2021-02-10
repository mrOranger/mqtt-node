const express = require('express');
const dbConnector = require('./models/Connector');
const connector = require('mqtt');
const app = express();

const PORT = 8081;
const databaseConnector = new dbConnector.Connector();

app.get('/names/:id', function (request, response) {
    const deviceId = request.query.id;
    databaseConnector.getPharaohName("SELECT * FROM pharaohName WHERE DeviceID = '" + deviceId + "'", request, response);
});

app.listen(PORT, function () {
    console.log('Server listening on port ' + PORT);
});