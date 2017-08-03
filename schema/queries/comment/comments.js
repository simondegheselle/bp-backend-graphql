// Import type helpers from graphql-js
import {
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import CommentType from '../../types/comment';
import CommentRepo from '../../../database/comments';

export default {
  type: new GraphQLList(CommentType),
  description: 'Returns all comments of a article',
  args: {
    slug: { type: new GraphQLNonNull(GraphQLString)},
  },
  resolve: (obj, args, req) => {
    let commentRepo = new CommentRepo();
    return commentRepo.getAll(args, req);
  }
};
