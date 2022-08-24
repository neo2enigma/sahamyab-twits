
// Error handler
function errors(err, req, res, next) {
    console.log('Error--->', err);
    next(err);
}
export default errors;
