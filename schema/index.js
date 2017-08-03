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

// Starting points of our data graph
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
