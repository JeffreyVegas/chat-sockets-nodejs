exports.success = (req, res, body, status) => {
  res.status(status).send({
    success: true,
    body,
  });
};

exports.error = (req, res, status, errorMessage, details) => {
  console.log("[error response]", details.message);
  res.status(status).send({
    success: false,
    message: errorMessage,
  });
};
