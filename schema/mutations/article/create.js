const {
  GraphQLNonNull
} = require('graphql');

const articleInputType = require('../../types/article-input');
const ArticleService = require('../../../services/articles');
const ArticleType = require('../../types/article');

module.exports = {
  type: ArticleType,
  description: "Creates a new article",
  args: {
    data: {
      type: new GraphQLNonNull(articleInputType),
      name: 'data'
    }
  },
  async resolve (obj, args, req) {
    let articleService = new ArticleService();
    return articleService.create(args, req);
  }
};
