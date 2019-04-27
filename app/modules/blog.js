'user strict';
const sql = require('../connection/db');

// Object constructor Blog
const Blog = function(blog) {
  this.title = blog.title,
  this.content = blog.content,
  this.date = Math.floor(new Date() / 1000);
};

Blog.addBlog = function addBlog(newBlog, result) {
  sql.query('INSERT INTO blog SET ?', newBlog, function(err, res) {
    if ( err ) {
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

Blog.getById= function getById( blogId, result) {
  sql.query(`SELECT * FROM blog WHERE id = ? `, blogId, function(err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Blog;
