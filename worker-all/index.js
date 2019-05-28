module.exports = function (context, message) {
    context.log('logging called');
    context.log(message);

    context.done();
}