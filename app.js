const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
var cors = require('cors')

// create express app
const app = express();
app.use(cors())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
	console.log("Successfully connected to the database");
}).catch(err => {
	console.log('Could not connect to the database. Exiting now...', err);
	process.exit();
});

// define a simple route
app.get('/', (req, res) => {
	res.sendFile(path.join( + './public/index.html'));
});

require('./routes/note.routes.js')(app);
require('./routes/user.routes.js')(app);

// listen for requests
app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});