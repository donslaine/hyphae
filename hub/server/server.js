const mqtt = require('mqtt')
const client  = mqtt.connect({host:localhost, port:1883}) //IP address of broker:port//


client.on('connect', function () {
    client.subscribe('presence', function (err) {
        if (!err) {
            client.publish('presence', 'Hello mqtt')
        }
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
})
