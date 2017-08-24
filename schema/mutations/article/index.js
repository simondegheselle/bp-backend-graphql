const createArticle = require('./create');
const updateArticle = require('./update');
const deleteArticle = require('./delete');
const favoriteArticle = require('./favorite');
const unfavoriteArticle = require('./unfavorite');

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle,
  favoriteArticle,
  unfavoriteArticle,
};
