//THIS IS JUST FOR TESTING
module.exports = function (context, req) {
    context.log('generate data');

    let num = Math.floor(Math.random() * 10);
    let m = {
        id: num,
        unique: uuidv4()
    };

    context.log(m);
    
    context.done(null, m);
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}