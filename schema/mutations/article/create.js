import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import articleInputType from '../../types/article-input';
import ArticleRepo from '../../../database/articles';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      type: new GraphQLNonNull(articleInputType),
      name: 'data'
    }
  },
  async resolve (obj, args, req) {
    let articleRepo = new ArticleRepo();
    return articleRepo.create(args, req);
  }
};
