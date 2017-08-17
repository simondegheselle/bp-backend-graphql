import {
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
} from 'graphql';

import CommentService from '../../../services/comments';

export default {
  type: GraphQLBoolean,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID)},
  },
  async resolve (obj, args, req) {
    let commentService = new CommentService();
    return commentService.delete(args, req);
  }
};
