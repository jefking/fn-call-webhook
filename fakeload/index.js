var request = require('request');

//THIS IS JUST FOR TESTING
module.exports = function (context, req) {
    context.log('generating mock data');

    let num = Math.floor(Math.random() * 10);

    request.post(
        'deepthunker.azurewebsites.net/api/api?code=Kbx5r5MAbW3ZiWvvaPCLCceNXbjXHq56CgUnqze3tD/XEP2rN3F50g==',
        {
            json: {
                id: num,
                unique: uuidv4()
            }
        },
        function (error, response, body) {
            if (error) context.done(error);
            else context.done(null, body);
        }
    );
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}