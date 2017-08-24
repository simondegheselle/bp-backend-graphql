const {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} = require('graphql');

const commentType = require('../../types/comment');
const CommentService = require('../../../services/comments');

module.exports = {
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
