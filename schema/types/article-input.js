const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql');

module.exports = new GraphQLInputObjectType({
  name: 'ArticleInput',
  fields: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    body: { type: GraphQLString },
    tagList: { type: new GraphQLList(GraphQLString)},
  }
});
