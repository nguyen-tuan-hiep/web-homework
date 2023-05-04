const BlogModel = require("../models/blog.model");

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.find({});
    res.json(blogs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createBlog = async (req, res) => {
  try {
    const newBlog = await new BlogModel(req.body).save();
    res.json(newBlog);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getBlogById = async (req, res) => {
  try {
    if (req.params.blogId.length !== 24)
      return res.status(404).json({
        message: "Blog not found",
      });
    const blog = await BlogModel.findById(req.params.blogId);
    if (!blog) throw new Error("Blog not found.");
    res.json(blog);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateBlog = async (req, res) => {
  try {
    if (req.params.blogId.length !== 24)
      return res.status(404).json({
        message: "Blog not found",
      });
    const updatedBlog = await BlogModel.findOneAndUpdate(
      { _id: req.params.blogId },
      req.body,
      { new: true }
    );
    if (!updatedBlog)
      return res.status(404).json({
        message: "Blog not found",
      });
    res.json(updatedBlog);
  } catch (err) {
    res.send(err.message);
  }
};

exports.deleteBlogById = async (req, res) => {
  try {
    if (req.params.blogId.length !== 24)
      return res.status(404).json({
        message: "Blog not found",
      });
    const deletedBlog = await BlogModel.deleteOne({
      _id: req.params.blogId,
    });
    if (deletedBlog.deletedCount === 0) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }
    return res.json({
      message: "Blog successfully deleted",
      _id: req.params.blogId,
    });
  } catch (err) {
    res.send(err.message);
  }
};
