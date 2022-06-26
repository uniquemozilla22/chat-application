class AppError extends Error {
  constructor(name, stack) {
    super(name, stack);
    this.name = name;
    this.stack = stack;
  }
}

export default AppError;
