import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import commentInputType from '../../types/comment-input';
import CommentService from '../../../services/comments';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      type: new GraphQLNonNull(commentInputType),
      name: 'data'
    }
  },
  async resolve (obj, args, req) {
    let commentService = new CommentService();
    return commentService.create(args, req);
  }
};
