import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
} from 'graphql';

import articleInputType from '../../types/article-input';
import ArticleRepo from '../../../database/articles';
import ArticleType from '../../types/article';

export default {
  type: ArticleType,
  args: {
    slug: { type: new GraphQLNonNull(GraphQLString)},
  },
  async resolve (obj, args, req) {
    let articleRepo = new ArticleRepo();
    return articleRepo.unfavorite(args, req);
  }
};
