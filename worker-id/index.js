var request = require('request');

module.exports = function (context, message) {
    context.log('webhook caller called');
    context.log(message);

    request.post('https://deepthunker.azurewebsites.net/api/fakehook?code=n8ac5oliqJyqreC7wOpbvRE71WpKAY8nfLRC4z9diNVHRrVyXsagLg==',
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