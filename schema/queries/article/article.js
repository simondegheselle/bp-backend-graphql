// Import type helpers from graphql-js
import {
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

import ArticleType from '../../types/article';
import ArticleService from '../../../services/articles';

export default {
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
