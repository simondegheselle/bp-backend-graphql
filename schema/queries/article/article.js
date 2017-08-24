// Import type helpers from graphql-js
const {
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} = require('graphql');

const ArticleType = require('../../types/article');
const ArticleService = require('../../../services/articles');

module.exports = {
  type: ArticleType,
  description: 'Returns a single article',
  args: {
    slug: { type: new GraphQLNonNull(GraphQLString)},
  },
  resolve: (obj, args, req) => {
    let articleService = new ArticleService();
    return articleService.getArticle(args);
  }
};
