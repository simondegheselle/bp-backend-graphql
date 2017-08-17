// Import type helpers from graphql-js
import {
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import ArticleType from '../../types/article';
import ArticleService from '../../../services/articles';

export default {
  type: new GraphQLList(ArticleType),
  description: 'Returns all articles of a user',
  args: {
    limit: { type: GraphQLInt },
    offset: {type: GraphQLInt },
    tag: { type: new GraphQLList(GraphQLString) },
    author: { type: GraphQLString },
    favoriter: { type: GraphQLString }
  },
  resolve: (obj, args, req) => {
    let articleService = new ArticleService();
    return articleService.getAll(args, req);
  }
};
