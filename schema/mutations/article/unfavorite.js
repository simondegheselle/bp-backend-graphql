import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
} from 'graphql';

import articleInputType from '../../types/article-input';
import ArticleService from '../../../services/articles';
import ArticleType from '../../types/article';

export default {
  type: ArticleType,
  args: {
    slug: { type: new GraphQLNonNull(GraphQLString)},
  },
  async resolve (obj, args, req) {
    let articleService = new ArticleService();
    return articleService.unfavorite(args, req);
  }
};
