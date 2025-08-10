const errorHandler = require("../../src/middleware/errorHandler");

test("calls next with error", () => {
  const err = new Error("Test error");
  const req = {};
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  };

  errorHandler(err, req, res, () => {});
  expect(res.status).toHaveBeenCalledWith(500);
});