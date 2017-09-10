const express = require('express')
const path = require('path')
const MongoClient = require('mongodb').MongoClient
const app = express()
const bodyParser = require('body-parser');
const routes = require('./routes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setup routes
app.use('/', express.static(path.join(__dirname, '../')));
app.use('/assets', express.static(path.join(__dirname, './')));
routes(app);
app.use('*', express.static(path.join(__dirname, '../')));

// setup database
/*MongoClient.connect('mongodb://localhost:27017/justforyou', function (err, db) {
  if (err) throw err
  console.log('connected to mongodb');
  app.db = db;
})*/

// start connection
app.listen(3000, function () {
  console.log('Just For You app listening on port 3000!')
});
