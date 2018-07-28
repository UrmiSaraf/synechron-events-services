const mongojs = require('mongojs');
var db = mongojs("syne-hsbc-db", ["events"]);

class Event {
    constructor() {

    }
    getAllEvents() {
        let promise = new Promise((resolve, reject) => {
            db.events.find((err, docs) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(docs);
            });
        });
        return promise;
    }
    getSingleEvent(id) {
        let promise = new Promise((resolve, reject) => {
            db.events.findOne({ eventId: parseInt(id) }, (err, doc) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(doc);
            });
        });
        return promise;
    }
    insertEvent(event) {
        let promise = new Promise(function (resolve, reject) {
            db.events.insert(event, (err) => {
                if (err) {
                    reject("Insertion failed!");
                }
                resolve("Insert Successful!");
            });
        });
        return promise;
    }
}

module.exports = new Event();