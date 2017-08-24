const {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
} = require('graphql');

const articleInputType = require('../../types/article-input');
const ArticleService = require('../../../services/articles');

module.exports = {
  type: GraphQLBoolean,
  args: {
    slug: { type: new GraphQLNonNull(GraphQLString)},
  },
  async resolve (obj, args, req) {
    let articleService = new ArticleService();
    return articleService.delete(args, req);
  }
};
