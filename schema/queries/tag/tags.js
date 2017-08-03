// Import type helpers from graphql-js
import {
  GraphQLList,
  GraphQLString,
} from 'graphql';

import TagRepo from '../../../database/tags';

export default {
  type: new GraphQLList(GraphQLString),
  description: 'Returns all tags',
  args: {},
  resolve: (obj, args) => {
    let tagRepo = new TagRepo();
    return tagRepo.getAll();
  }
};
