'use strict';
const Blog = require('../modules/blog');

exports.add = function(req, res) {
  const newBlog = new Blog(req.body);
  // handles null error
  if (!newBlog.title || !newBlog.content) {
    res.status(400).send({
      error: true,
      message: 'Missing Title or Content',
    });
  } else {
    Blog.addBlog(newBlog, function(err, blog) {
      if ( err ) {
        res.send(err);
      }
      res.json({'id': blog});
    });
  }
};

exports.get = function(req, res) {
  Blog.getById(req.params.id, function(err, blog) {
    if (err) {
      res.send(err);
    }
    res.json(blog);
  });
};
