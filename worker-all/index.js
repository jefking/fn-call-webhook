module.exports = function (context, message) {
    context.log('logging called');
    context.log('EnqueuedTimeUtc =', context.bindingData.enqueuedTimeUtc);
    context.log(message);

    context.done();
}