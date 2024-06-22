const asyncHandler = (Controller) => {
  return async function (req, res) {
    const controller = new Controller(req, res);
    await controller.send();
  };
};

export default asyncHandler;
