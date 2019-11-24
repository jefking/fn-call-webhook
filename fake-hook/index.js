const appInsights = require("applicationinsights");

// THIS IS JUST FOR TESTING
module.exports = function (context, req) {
    appInsights.setup().start();
    
    context.save = (typeof req.body != 'undefined' && typeof req.body == 'object') ? req.body : null;
    
    context.res = {
        status: 200
    };

    context.done();
}