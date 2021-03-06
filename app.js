var http = require('http'),
    path = require('path'),
    methods = require('methods'),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    passport = require('passport'),
    errorhandler = require('errorhandler'),
    mongoose = require('mongoose'),
    responseTime = require('response-time'),
    auth = require('./auth'),
    graphqlHTTP = require('express-graphql');

require('./models/User');
require('./models/Article');
require('./models/Comment');
require('./config/passport');
const schema = require('./schema');

var isProduction = process.env.NODE_ENV === 'production';

// Create express server
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

var mongoURI = 'mongodb://simondegheselle:graphql-falcor@ds121212.mlab.com:21212/graphql-falcor'
var MongoDB = mongoose.connect(mongoURI).connection;
console.log(mongoURI);

MongoDB.on('error', function(err) { console.log(err.message); });
MongoDB.once('open', function() {
  console.log("mongodb connection open");
});

app.use('/graphql', auth);

app.use(responseTime());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  pretty: true,
  graphiql: true,
}));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`GraphQL server is listening on port ${PORT}`);
});
