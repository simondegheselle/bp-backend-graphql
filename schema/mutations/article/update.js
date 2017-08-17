import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
} from 'graphql';

import articleInputType from '../../types/article-input';
import ArticleService from '../../../services/articles';

export default {
  type: GraphQLBoolean,
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
