// Import type helpers from graphql-js
import {
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import ArticleType from '../../types/article';
import Db from '../../../database/articles';

export default {
  type: new GraphQLList(ArticleType),
  description: 'Returns all articles of a user',
  args: {
    username: { type: new GraphQLNonNull(GraphQLString)},
    limit: { type: GraphQLInt },
    offset: {type: GraphQLInt },
  },
  resolve: (obj, args) => {
    return Db().getByUser(args);
  }
};
