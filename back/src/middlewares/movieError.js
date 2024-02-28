module.exports = (err, req, res, next) => {
    if (err) res.status(500).json({
        message: "Se ha producido un error", error: err.message
    })
};