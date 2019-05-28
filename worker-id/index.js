module.exports = function (context, message) {
    context.log('webhook caller called');
    context.log(message);

    context.done();
}