const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1234');
const topic = "topic/hello";

client.on('message', function (topic, message) {
    message = message.toString();
    console.log('Message received: ' + message + ' on topic: ' + topic);
});

client.on('connect', function () {
    client.subscribe(topic);
});