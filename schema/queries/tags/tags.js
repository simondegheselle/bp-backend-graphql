// Import type helpers from graphql-js
const {
  GraphQLString,
  GraphQLList,
} = require('graphql');

const tags = require('../../database/tags');

const Tags = {
  type: new GraphQLList(GraphQLString),
  description: 'Returns all the tags',
  args: {},
  resolve: (obj, args) => {
    return tags().getAll();
  }
};

module.exports = Tags;
