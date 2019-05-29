const request = require('request');
const appInsights = require("applicationinsights");

module.exports = function (context, msg, registration) {
    appInsights.setup().start();
    let aiClient = appInsights.defaultClient;

    context.log({reg: registration});
    let config = JSON.parse(registration);

    context.log({config: config});
    let url = config.url;//'https://deepthunker.azurewebsites.net/api/fake-hook?code=6XErItfUWT/nTVB8ksEa2JLxCOkZDQ1hbbatczBWpRYtCThZL63GNA==';
    
    context.log({url: url});
    // request.post(url,
    //     {
    //         json: true,
    //         body: msg
    //     },
    //     function (error, response, body) {
    //         if (error)
    //         {
    //             context.done(error);
    //         }
    //         else
    //         {
    //             context.log({rep: response});

    //             context.log({body: body});

    //             client.trackRequest({name:"POST", url:url, duration:309, resultCode:200, success:true});
    //         }
    //     }
    // );

    context.done();
}