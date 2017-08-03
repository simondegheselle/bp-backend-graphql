import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import commentInputType from '../../types/comment-input';
import CommentRepo from '../../../database/comments';

export default {
  type: GraphQLBoolean,
  args: {
    data: {
      type: new GraphQLNonNull(commentInputType),
      name: 'data'
    }
  },
  async resolve (obj, args, req) {
    let commentRepo = new CommentRepo();
    return commentRepo.create(args, req);
  }
};
