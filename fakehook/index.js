module.exports = function (context, req) {
    context.log('fake-hook called');
    
    context.res = {
        status: 200
    };

    context.done();
}