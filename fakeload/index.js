module.exports = function (context, req) {
    context.log('generate data');

    let m = {
        id: 5,
        name: 'happy'
    };
    
    context.done(null, m);
}