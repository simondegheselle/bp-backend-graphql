module.exports = {
  secret: process.env.NODE_ENV === 'production' ? 'graphqltesting' : 'secret'
};
