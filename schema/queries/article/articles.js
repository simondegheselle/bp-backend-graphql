// Import type helpers from graphql-js
import {
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import ArticleType from '../../types/article';
import ArticleRepo from '../../../database/articles';

export default {
  type: new GraphQLList(ArticleType),
  description: 'Returns all articles of a user',
  args: {
    username: { type: new GraphQLNonNull(GraphQLString)},
    limit: { type: GraphQLInt },
    offset: {type: GraphQLInt },
  },
  resolve: (obj, args, req) => {
    let articleRepo = new ArticleRepo();
    return articleRepo.getByUser(args);
  }
};
