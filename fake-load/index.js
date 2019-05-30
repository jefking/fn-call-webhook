var request = require('request');

const resources = ['user', 'order', 'enrollment'];
const actions = LoadActions();

//THIS IS JUST FOR TESTING
module.exports = function (context, req) {  
    let resourceNum = Math.floor(Math.random() * 3);
    resource = resources[resourceNum];
    let actionNum = Math.floor(Math.random() * actions[resource].length);
    let action = actions[resource][actionNum];
    let future = Math.floor(Math.random() * 15);
    
    var model = {
        "tenantId": "e155369f",//uuidv4(), HARD CODED FOR TESTING
        "resource": resource,
        "action": action,
        "addMinutes": future,
        "payload": {
            "foo": "bar",
            "garbage": "mooon",
            "actionId": uuidv4()
        }
    };
    
    request.post('<CHANGE URL>',
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