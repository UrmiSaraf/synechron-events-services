const express = require('express');
const employeeRoutes = express.Router();
var employeeObj = require('./web-api/employee-api');


employeeRoutes.get('/', (req, res) => {
    var promise = employeeObj.getAllEmployees();
    promise.then((data) => {
        res.json(data);
    }, (reason) => {
        console.log(reason);
        res.send("Something went wrong! Please try after some time!");
    });
});
employeeRoutes.get('/:id', (req, res) => {
    let id = req.params.id;
    let promise = employeeObj.getSingleEmployee(id);
    promise.then((data) => {
        res.json(data);
    }, (reason) => {
        console.log(reason);
        res.send("Something went wrong! Please try after some time!");
    });
});
employeeRoutes.post("/", (req, res) => {
    let employee = req.body;
    let promise = employeeObj.insertEmployee(employee);
    promise.then((data) => {
        res.json(data);
    },
        (reason) => {
            res.send(reason);
        })
});

module.exports = employeeRoutes;