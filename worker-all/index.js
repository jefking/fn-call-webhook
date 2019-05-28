module.exports = function (context, msg) {
    context.log(msg);
    context.log(context.bindings.msg);

    context.done();
}