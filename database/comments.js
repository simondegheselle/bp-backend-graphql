var mongoose = require('mongoose');
var Article = mongoose.model('Article');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');

export default () => {
  return {
    getById(req) {
      console.log(req);
      Comment.findById(req.id).then(function(comment) {
        if (!comment) {
          throw new Error('Error adding new blog post');
        }
        return comment;
      }).catch(el => console.log(el));
    }
  };
};
