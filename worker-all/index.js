const request = require('request');
const appInsights = require("applicationinsights");

module.exports = function (context, msg, registration) {
    appInsights.setup().start();
    let aiClient = appInsights.defaultClient;

    let url = registration.url;
    
    request.post(url,
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

                context.log({body: body});

                client.trackRequest({name:"POST", url:url, duration:309, resultCode:200, success:true});
            }
        }
    );

    context.done();
}