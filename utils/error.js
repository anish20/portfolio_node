
class ErrorHandler extends Error {
    constructor(statusCode, message) {
      console.log("^^^^^^^^^^^^", statusCode);
      super(statusCode, message);
      this.status = "error";
      this.statusCode = statusCode;
      this.message = message;
    }
  }

  module.exports = {
    ErrorHandler
  };