var request = require('request');

module.exports = function (context, msg) {
    context.log(msg);

    request.post('https://deepthunker.azurewebsites.net/api/fake-hook?code=6XErItfUWT/nTVB8ksEa2JLxCOkZDQ1hbbatczBWpRYtCThZL63GNA==',
        {
            json: true,
            body: model
        },
        function (error, response, body) {
            if (error) context.done(error);
        }
    );

    context.done();
}