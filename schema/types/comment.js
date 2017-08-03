const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');

const UserType = require('./user');

module.exports = new GraphQLObjectType({
  name: 'CommentType',
  description: 'A comment object',
  fields: {
    body: { type: GraphQLString },
    author: { type: UserType },
    createdAt: { type: new GraphQLNonNull(GraphQLString) }
  }
});
