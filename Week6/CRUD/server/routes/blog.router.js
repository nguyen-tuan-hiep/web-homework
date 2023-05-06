const blogController = require("../controllers/blog.controller");

module.exports = (app) => {
  // Routes for all blogs
  app
    .route("/api/blogs")
    .get(blogController.getAllBlogs) // get all blogs
    .post(blogController.createBlog); // create a new blog

  // Routes for a specific blog
  app
    .route("/api/blogs/:blogId")
    .get(blogController.getBlogById) // get a specific blog
    .patch(blogController.updateBlog) // update a specific blog
    .delete(blogController.deleteBlogById); // delete a specific blog
};
