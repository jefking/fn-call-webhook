var request = require('request');

const resources = ['user', 'order', 'enrollment'];
const actions = LoadActions();

//THIS IS JUST FOR TESTING
module.exports = function (context, req) {
    let num = Math.floor(Math.random() * 10);    
    let resourceNum = Math.floor(Math.random() * 3);
    resource = resources[resourceNum];
    let actionNum = Math.floor(Math.random() * actions[resource].length);

    var model = {
        userId: num,
        tenantId: uuidv4(),
        resource: resource,
        action: actions[resource][actionNum],
        addMinutes: Math.floor(Math.random() * 5)
    };
    
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

function LoadActions()
{
    var actions = {};
    actions[resources[0]] = ['signup', 'signin'],
    actions[resources[1]] = ['created'],
    actions[resources[2]] = ['created', 'trial', 'progress', 'completed']

    return actions;
}