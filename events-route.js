const express = require('express');
const eventRoutes = express.Router();
var eventObj = require('./web-api/event-api');


eventRoutes.get('/', (req, res) => {
    var promise = eventObj.getAllEvents();
    promise.then((data) => {
        res.json(data);
    }, (reason) => {
        console.log(reason);
        res.send("Something went wrong! Please try after some time!");
    });
});
eventRoutes.get('/:id', (req, res) => {
    let id = req.params.id;
    let promise = eventObj.getSingleEvent(id);
    promise.then((data) => {
        res.json(data);
    }, (reason) => {
        console.log(reason);
        res.send("Something went wrong! Please try after some time!");
    });
});
eventRoutes.post("/", (req, res) => {
    let event = req.body;
    let promise = eventObj.insertEvent(event);
    promise.then((data) => {
        res.json(data);
    },
        (reason) => {
            res.send(reason);
        })
});

module.exports = eventRoutes;