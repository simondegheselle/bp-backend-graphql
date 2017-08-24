const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'CommentInput',
  fields: {
    slug: { type: new GraphQLNonNull(GraphQLString) },
    body: { type: new GraphQLNonNull(GraphQLString) },
  }
});
