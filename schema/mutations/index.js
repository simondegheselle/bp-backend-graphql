const article = require('./article');
const comment = require('./comment');

module.exports = {
  ...article,
  ...comment,
};
