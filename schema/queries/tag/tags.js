// Import type helpers from graphql-js
const {
  GraphQLList,
  GraphQLString,
} = require('graphql');

const TagService = require('../../../services/tags');

module.exports = {
  type: new GraphQLList(GraphQLString),
  description: 'Returns all tags',
  args: {},
  resolve: (obj, args) => {
    let tagService = new TagService();
    return tagService.getAll();
  }
};
