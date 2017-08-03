var mongoose = require('mongoose');
var Article = mongoose.model('Article');

export default () => {
  return {
    getAll() {
      return Article.find().distinct('tagList');
    },
  };
};
