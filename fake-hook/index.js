const appInsights = require("applicationinsights");

// THIS IS JUST FOR TESTING
module.exports = function (context, req) {
    appInsights.setup().start();
    
    let model = (typeof req.body != 'undefined' && typeof req.body == 'object') ? req.body : null;
    context.save = model;
    context.log(model);

    context.res = {
        status: 200,
        body: model
    };

    context.done();
}