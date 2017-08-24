const {
  GraphQLNonNull,
  GraphQLBoolean
} = require('graphql');

const commentInputType = require('../../types/comment-input');
const CommentService = require('../../../services/comments');

module.exports = {
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
