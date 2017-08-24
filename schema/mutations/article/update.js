const {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
} = require('graphql');

const articleInputType = require('../../types/article-input');
const ArticleService = require('../../../services/articles');
const ArticleType = require('../../types/article');

module.exports = {
  type: ArticleType,
  args: {
    slug: { type: new GraphQLNonNull(GraphQLString)},
    data: {
      type: new GraphQLNonNull(articleInputType),
      name: 'data'
    },
  },
  async resolve (obj, args, req) {
    let articleService = new ArticleService();
    return articleService.update(args, req);
  }
};
