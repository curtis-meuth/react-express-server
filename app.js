var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


// Setup DB
var db;
if(process.env.ENV == 'Test')
    db = mongoose.connect('mongodb://localhost/groceryAPI_test');
else
    db = mongoose.connect('mongodb://localhost/groceryAPI');

//Setup main vars
var Grocery = require('./models/groceryModel');
var app = express();
var port = process.env.PORT || 3000;

//Configure App
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Configure Routers
groceryRouter = require('./routes/groceryRoutes')(Grocery);

// Setup API end points
app.use('/api/groceries', groceryRouter);

// Handler for route
app.get('/', function(req, res){
    res.render('../views/index.ejs', {} );
});

app.listen(port, function() {
    console.log('Running on PORT: ' + port);
});

module.exports = app;