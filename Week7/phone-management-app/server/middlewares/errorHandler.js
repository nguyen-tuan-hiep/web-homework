const {VALIDATION_ERROR, CAST_ERROR, INTERNAL_SERVER_ERROR} = require("../constants/errors");

module.exports = errorHandler = (err, req, res) => {
    if (err.name === VALIDATION_ERROR.name) {
        const errors = Object.values(err.errors).map((el) => el.message);

        return res.status(VALIDATION_ERROR.status).json({
            message: VALIDATION_ERROR.message,
            errors,
        });
    } else if (err.name === CAST_ERROR.name) {
        return res.status(CAST_ERROR.message).json({
            message: `${CAST_ERROR.message}: ${err.path}`,
        });
    }

    console.error(err);
    res.status(INTERNAL_SERVER_ERROR.status).json({message: INTERNAL_SERVER_ERROR.message});
}
