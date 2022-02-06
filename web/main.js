fetch("https://dow5s1rm3d.execute-api.us-east-1.amazonaws.com/Prod/hello/")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

fetch("https://dow5s1rm3d.execute-api.us-east-1.amazonaws.com/Prod/sensors/", {
    method: "POST",
    body: JSON.stringify({
        "sensor_id": "sensor1",
    })
})