module.exports = function (app) {
  /*
  * Routes
  */
  app.use('/contestants', require('./routes/contestants.route'));
  app.use('/root', require('./routes/root.route'));

};
