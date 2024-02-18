const asyncHandler = (fn) => (req, res, next) =>{
    Promise.resolve(fn(req, res, next)).catch(next);
} //asyncHandler is a middleware function that wraps another function and catches any errors that get passed to next() and passes them to Express's default error handler (the last error handler in the middleware chain). This way, you don't have to write try-catch blocks in your route handlers.

export default asyncHandler; //export the asyncHandler function