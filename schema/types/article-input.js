import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'ArticleInput',
  fields: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    body: { type: GraphQLString },
    tagList: { type: new GraphQLList(GraphQLString)},
  }
});
