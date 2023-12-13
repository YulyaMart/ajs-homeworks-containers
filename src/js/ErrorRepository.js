export default class ErrorRepository {
  constructor() {
    this.errors = new Map();

    this.addError(400, 'Bad Request');
    this.addError(401, 'Unauthorized');
    this.addError(402, 'Payment Required');
  }

  addError(code, message) {
    this.errors.set(code, message);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
