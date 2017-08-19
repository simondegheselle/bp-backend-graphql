import {
  GraphQLNonNull
} from 'graphql';

import articleInputType from '../../types/article-input';
import ArticleService from '../../../services/articles';
import ArticleType from '../../types/article';

export default {
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
