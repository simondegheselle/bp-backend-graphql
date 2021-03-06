const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInt,
} = require('graphql');

const UserType = require('./user');
const CommentType = require('./comment');

module.exports = new GraphQLObjectType({
  name: 'ArticleType',
  description: 'An article object',
  fields: {
    slug: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    body: { type: GraphQLString },
    tagList: { type: new GraphQLList(GraphQLString)},
    author: { type: UserType },
    comments: { type: new GraphQLList(CommentType) },
    createdAt: { type: new GraphQLNonNull(GraphQLString) },
    updatedAt: { type: new GraphQLNonNull(GraphQLString) },    
    favoritesCount: { type: GraphQLInt },
  }
});
