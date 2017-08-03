// Import type helpers from graphql-js
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt,
} = require('graphql');

import queries from './queries';
import mutations from './mutations';

// The root query type is where in the data graph
// we can start asking questions
const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'This is the root query',
  fields: queries
});

const RootMutationType = new GraphQLObjectType({
  name: 'RootMutationType',
  description: 'This is the root mutation',
  fields: mutations
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType
});

module.exports = schema;
