import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

import commentType from '../../types/comment';
import Db from '../../../database/comments';

export default {
  type: commentType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (obj, args) => {
      return Db().getById(args);
  }
};
