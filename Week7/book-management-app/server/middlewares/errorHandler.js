function errorHandler(err, req, res, next) {
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((el) => el.message);

    return res.status(400).json({
      message: "Validation Error",
      errors,
    });
  } else if (err.name === "CastError") {
    return res.status(400).json({
      message: `Invalid ${err.path} value`,
    });
  }

  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
}

module.exports = { errorHandler };
