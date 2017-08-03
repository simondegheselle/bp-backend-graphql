const mongoose = require('mongoose');
const Article = mongoose.model('Article');
const Comment = mongoose.model('Comment');
const User = mongoose.model('User');
import ArticleRepo from './articles';

let instance = null;

class CommentRepository {
  constructor() {
    if (!instance) {
      instance = this;
    }
    this.time = new Date();
    this.articleRepo = new ArticleRepo();

    return instance;
  }

  getComment(args) {
    return Comment.findById(args.id).then(function(comment) {
      if (!comment) {
        throw new Error('No comment entry found');
      }
      return comment;
    });
  }

  create(args, req) {
    return Promise.all([
      this.articleRepo.getArticle(args.data),
      User.findById(req.payload.id)
    ]).then(function(results){
      let article = results[0];
      let user = results[1];
      if (!user) {
        throw new Error('No user entry found');
      }

      let comment = new Comment();
      comment.body = args.data.body;
      comment.article = article;
      comment.author = user;

      return comment.save().then(function(){
        article.comments.push(comment);

        return article.save().then(function(article) {
          return true;
        });
      });
    })
  }

  delete(args, req) {
    this.getComment(args).then(function(comment) {
      if(comment.author.toString() === req.payload.id.toString()){
        let articleId = comment.article;
        return instance.articleRepo.getById(articleId).then(function(article) {
          article.comments.remove(comment._id);
          article.save()
            .then(Comment.find({_id: comment._id}).remove().exec())
            .then(function(){
              return true;
            });
        });
      } else {
        throw new Error('Only the author of the comment can remove his comment');
      }
    })
  }

  getAll(args, req) {
    return this.articleRepo.getArticle(args).then(function(article) {
      return Comment.find({ article: article._id }).populate('author').then(function(comments) {
        return comments;
      });
    });
  }
};

export default CommentRepository;
