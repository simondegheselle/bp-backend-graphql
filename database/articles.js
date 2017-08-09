var mongoose = require('mongoose');
var Article = mongoose.model('Article');
var User = mongoose.model('User');

let instance = null;

class ArticleRepository {
  constructor() {
    if (!instance) {
      instance = this;
    }
    this.time = new Date();

    return instance;
  }

  getById(id) {
    console.log('test');
    return Article.findOne({
        _id: id
      })
      .populate('author')
      .then(function(article) {
        if (!article) {
          throw new Error('Article can\'t be found');
        }
        return article;
      });
  }

  getAll(args, req) {
    var query = {};
    var limit = 20;
    var offset = 0;

    if (typeof args.limit !== 'undefined') {
      limit = args.limit;
    }

    if (typeof args.offset !== 'undefined') {
      offset = args.offset;
    }

    if (typeof args.tag !== 'undefined') {
      query.tagList = {
        "$in": [args.tag]
      };
    }

    return Promise.all([
      args.author ? User.findOne({username: args.author}) : null,
      args.favorited ? User.findOne({username: args.favorited}) : null,
    ]).then(function(results) {
      var author = results[0];
      var favoriter = results[1];

      if (author) {
        query.author = author._id;
      }

      if(favoriter){
        query._id = {$in: favoriter.favorites};
      } else if(args.favorited){
        query._id = {$in: []};
      }

      return Promise.all([
        Article.find(query)
        .limit(Number(limit))
        .skip(Number(offset))
        .sort({
          createdAt: 'desc'
        })
        .populate('author')
        .exec(),
        req.payload ? User.findById(req.payload.id) : null,
      ]).then(function(results) {
        var articles = results[0];
        var user = results[1];

        return articles;
      });
    })
  }

  create(args, req) {
    console.log(req.payload);
    return User.findById(req.payload.id).then(function(user) {
      const article = new Article();

      if (!user) {
        throw new Error('No user entry found for username');
      }

      if (typeof args.data.title !== 'undefined') {
        article.title = args.data.title;
      }

      if (typeof args.data.description !== 'undefined') {
        article.description = args.data.description;
      }

      if (typeof args.data.body !== 'undefined') {
        article.body = args.data.body;
      }

      if (typeof args.data.tagList !== 'undefined') {
        article.tagList = args.data.tagList
      }

      article.author = user;

      const newArticle = article.save();

      if (!newArticle) {
        throw new Error('Article could not be added');
      }

      return newArticle;
    });
  }

  update(req) {
    let article = this.getArticle();

    if (typeof req.title !== 'undefined') {
      article.title = req.body.article.title;
    }

    if (typeof req.description !== 'undefined') {
      article.description = req.body.article.description;
    }

    if (typeof req.body.article.body !== 'undefined') {
      article.body = req.body.article.body;
    }

    if (typeof req.body.article.tagList !== 'undefined') {
      article.tagList = req.body.article.tagList
    }

    return article.save().then(function(article) {
      return article;
    });
  }

  delete(args, req) {
    return User.findById(req.payload.id).then(function(user) {
      if (!user) {
        throw new Error('No user found');
      }

      return instance.getArticle(args).then(function(article) {
        if (article.author._id.toString() === req.payload.id.toString()) {
          return article.remove().then(function() {
            return true;
          });
        } else {
          return false;
        }
      });
    });
  }

  getArticle(args) {
    return Article.findOne({
        slug: args.slug
      })
      .populate('author')
      .then(function(article) {
        if (!article) {
          throw new Error('Article can\'t be found');
        }
        return article;
      });
  }

  favorite(args, req) {
    return Promise.all([
      this.getArticle(args),
      User.findById(req.payload.id)
    ]).then(function(results) {
      let article = results[0];
      let user = results[1];

      if (!user) {
        throw new Error('No user entry found');
      }

      return user.favorite(article._id).then(function() {
        return article.updateFavoriteCount().then(function(article) {
          return article;
        });
      });
    })
  }

  unfavorite(args, req) {
    return Promise.all([
      this.getArticle(args),
      User.findById(req.payload.id)
    ]).then(function(results) {
      let article = results[0];
      let user = results[1];

      if (!user) {
        throw new Error('No user entry found');
      }

      return user.unfavorite(article._id).then(function() {
        return article.updateFavoriteCount().then(function(article) {
          return article;
        });
      });
    })
  }
};

export default ArticleRepository;
