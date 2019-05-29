var request = require('request');

module.exports = function (context, message) {
    context.log(message);

    request.post('https://deepthunker.azurewebsites.net/api/fakehook?code=dQRaiGlwpNk7YY0yu/xX/h1z3NCYlz2CaqUBlIz8EYeicJRYn/kBgw==',
        {
            json: true,
            body: message
        },
        function (error, response, body) {
            if (error) context.done(error);
        }
    );

    context.done();
}