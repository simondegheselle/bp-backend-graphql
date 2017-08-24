const {
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
} = require('graphql');

const CommentService = require('../../../services/comments');

module.exports = {
  type: GraphQLBoolean,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID)},
  },
  async resolve (obj, args, req) {
    let commentService = new CommentService();
    return commentService.delete(args, req);
  }
};
