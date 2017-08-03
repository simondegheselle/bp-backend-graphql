import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
} from 'graphql';

import CommentRepo from '../../../database/comments';

export default {
  type: GraphQLBoolean,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID)},
  },
  async resolve (obj, args, req) {
    let commentRepo = new CommentRepo();
    return commentRepo.delete(args, req);
  }
};
