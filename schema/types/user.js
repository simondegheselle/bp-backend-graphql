const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'UserType',
  description: 'A user object',
  fields: {
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    bio: { type: GraphQLString },
  }
});
