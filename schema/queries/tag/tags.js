// Import type helpers from graphql-js
import {
  GraphQLList,
  GraphQLString,
} from 'graphql';

import TagService from '../../../services/tags';

export default {
  type: new GraphQLList(GraphQLString),
  description: 'Returns all tags',
  args: {},
  resolve: (obj, args) => {
    let tagService = new TagService();
    return tagService.getAll();
  }
};
