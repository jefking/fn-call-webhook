const request = require('request');
const appInsights = require("applicationinsights");

module.exports = function (context, msg) {
    appInsights.setup().start(); // assuming ikey is in env var
    let aiClient = appInsights.defaultClient;

    let url = 'https://deepthunker.azurewebsites.net/api/fake-hook?code=6XErItfUWT/nTVB8ksEa2JLxCOkZDQ1hbbatczBWpRYtCThZL63GNA==';
    request.post(url,
        {
            json: true,
            body: msg
        },
        function (error, response, body) {
            if (error)
            {
                aiClient.trackException({exception: error});
                context.done(error);
            }
            else
            {
                context.log(response);

                context.log(body);

                client.trackRequest({name:"GET /customers", url:url, duration:309, resultCode:200, success:true});
            }
        }
    );

    context.done();
}