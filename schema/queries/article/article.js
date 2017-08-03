// Import type helpers from graphql-js
import {
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

import ArticleType from '../../types/article';
import ArticleRepo from '../../../database/articles';

export default {
  type: ArticleType,
  description: 'Returns a single article',
  args: {
    slug: { type: new GraphQLNonNull(GraphQLString)},
  },
  resolve: (obj, args, req) => {
    let articleRepo = new ArticleRepo();
    return articleRepo.getArticle(args);
  }
};
