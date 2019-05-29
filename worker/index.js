const request = require('request');
const appInsights = require("applicationinsights");

module.exports = function (context, msg, registration) {
    appInsights.setup().start();
    let aiClient = appInsights.defaultClient;
    
    request.post(registration.url,
        {
            json: true,
            body: msg
        },
        function (error, response, body) {
            if (error)
            {
                context.done(error);
            }
            else
            {
                context.log({rep: response});

                client.trackRequest({name: registration.resource + '/' + registration.action, url:registration.url, duration:response.elapsedTime, resultCode:response.statusCode, success:true});
            }
        }
    );

    context.done();
}