const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const eventRoutes = require('./events-route');
var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/events', eventRoutes);

app.listen(9090, () => {
    console.log("Synechron Services running on PORT - 9090");
});
