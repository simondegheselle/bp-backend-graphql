import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import commentType from '../../types/comment';
import CommentRepo from '../../../database/comments';

export default {
  type: commentType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (obj, args) => {
    let commentRepo = new CommentRepo();
    return commentRepo.getComment(args);
  }
};
