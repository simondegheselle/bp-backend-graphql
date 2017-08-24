const article = require('./article');
const comment = require('./comment');
const tag = require('./tag');

module.exports = {
  ...article,
  ...comment,
  ...tag,
};
