require("babel-register");

var http = require('http'),
    path = require('path'),
    methods = require('methods'),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    passport = require('passport'),
    errorhandler = require('errorhandler'),
    mongoose = require('mongoose');

var isProduction = process.env.NODE_ENV === 'production';

// Create global app object
var app = express();

app.use(cors());

// Normal express config defaults
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('method-override')());
app.use(express.static(__dirname + '/public'));

app.use(session({ secret: 'graphqltesting', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false  }));

if (!isProduction) {
  app.use(errorhandler());
}

//var mongoURI = isProduction? process.env.MONGODB_URI : 'mongodb://db:27017/conduit';
var mongoURI = 'mongodb://simondegheselle:graphql-falcor@ds121212.mlab.com:21212/graphql-falcor'
// var mongoURI = 'mongodb://db:27017/conduit'
var MongoDB = mongoose.connect(mongoURI).connection;
console.log(mongoURI);

MongoDB.on('error', function(err) { console.log(err.message); });
MongoDB.once('open', function() {
  console.log("mongodb connection open");
});

require('./models/User');
require('./models/Article');
require('./models/Comment');
require('./config/passport');

const schema = require('./schema');
const graphqlHTTP = require('express-graphql');

const auth = require('./auth');

app.use('/graphql', auth);

app.use('/graphql', graphqlHTTP({
  schema: schema,
  pretty: true,
  graphiql: true,
}));

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0';

app.listen(PORT, HOST);
console.log(`GraphQL server is listening on port ${PORT}`);
