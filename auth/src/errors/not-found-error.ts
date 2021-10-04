import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode = 404;
  // reason = "Error: someting went wrong";
  constructor() {
    super();

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeErrors() {
    return [{ message: "Not found" }];
  }
}
