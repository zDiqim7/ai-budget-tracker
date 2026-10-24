const HttpError = require('./HttpError');

class NotFound extends HttpError {
  constructor(message = "Not Found") {
    super(message);
    this.name = "NotFoundError";
  }
}

module.exports = NotFound;