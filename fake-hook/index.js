const appInsights = require("applicationinsights");

// THIS IS JUST FOR TESTING
module.exports = function (context, req) {
    appInsights.setup().start();
    
    let model = (typeof req.body != 'undefined' && typeof req.body == 'object') ? req.body : null;

    context.log(model.body);
    context.bindings.json = model.body;
    context.res = {
        status: 200
    };

    context.done();
}