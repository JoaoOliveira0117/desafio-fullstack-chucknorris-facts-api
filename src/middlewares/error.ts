const error = (err, _, res, __) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
    },
  });
};

export default error;
