// THIS IS JUST FOR TESTING
module.exports = function (context, req) {
    context.log(req);
    
    context.res = {
        status: 200
    };

    context.done();
}