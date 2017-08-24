// Import type helpers from graphql-js
const {
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const ArticleType = require('../../types/article');
const ArticleService = require('../../../services/articles');

module.exports = {
  type: new GraphQLList(ArticleType),
  description: 'Returns all articles of a user',
  args: {
    limit: { type: GraphQLInt },
    offset: {type: GraphQLInt },
    tag: { type: new GraphQLList(GraphQLString) },
    author: { type: GraphQLString },
    favoriter: { type: GraphQLString }
  },
  resolve: (obj, args, req) => {
    let articleService = new ArticleService();
    return articleService.getAll(args, req);
  }
};
