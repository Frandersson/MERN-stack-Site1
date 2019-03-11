const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const configPath = require('../../config.json');

const db = mysql.createConnection({
    host: configPath.host,
    user: configPath.user,
    password: configPath.pw,
    database: configPath.db
});

db.connect((err) => {
    if (err) throw err;
    console.log("MySQL Connected!");
});

const app = express();
// Cross-origin requests
app.use(cors());
// Required for parsing bodies in POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
require('./routes/placeOrderRoutes')(app, db);
require('./routes/searchOrderRoutes')(app, db);

app.listen('3001', () => {
    console.log("Server started on port 3001.");
})