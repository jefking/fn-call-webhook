var request = require('request');

//THIS IS JUST FOR TESTING
module.exports = function (context, req) {
    context.log('generating mock data');

    let num = Math.floor(Math.random() * 10);

    var model = {
        id: num,
        unique: uuidv4(),
        from: "nodejs"
    };
    
    context.log(model);

    request.post('https://deepthunker.azurewebsites.net/api/api?code=5wX7x78ZSbpw4uisByLFxJd9lxeID0LfkQ32i0IgRkQ3UZuaF5Mj/Q==',
        {
            json: true,
            body: JSON.stringify(model)
        },
        function (error, response, body) {
            if (error) context.done(error);
        }
    );

    context.done();
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}