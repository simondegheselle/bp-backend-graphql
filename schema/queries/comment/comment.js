import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import commentType from '../../types/comment';
import CommentService from '../../../services/comments';

export default {
  type: commentType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (obj, args) => {
    let commentService = new CommentService();
    return commentService.getComment(args);
  }
};
