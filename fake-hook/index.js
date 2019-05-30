// THIS IS JUST FOR TESTING
module.exports = function (context, req) {
    let model = (typeof req.body != 'undefined' && typeof req.body == 'object') ? req.body : null;
    context.log(model);
    
    context.res = {
        status: 200
    };

    context.done();
}