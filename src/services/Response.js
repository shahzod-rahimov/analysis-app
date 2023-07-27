export default class Response {
  constructor(data, error) {
    this.success = !error
    this.data = data
    this.error = error
    // if (error && typeof data === 'object') {
    //   this.error.info = this.data
    // }
  }

  getError(cb) {
    cb({
      success: this.success,
      error: {
        code: this.error.code || '',
        message: this.error.message || '',
      },
      data: this.data,
    })
  }

  getSuccess(cb) {
    cb({
      success: this.success,
      data: this.data,
    })
  }
}
