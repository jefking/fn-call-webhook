module.exports = async function (context, req) {
    let model = (typeof req.body != 'undefined' && typeof req.body == 'object') ? req.body : null;
    let err = !model ? "no data; or invalid payload in body" : null;

    if (!err) {
        const timeNowUtc = new Date(Date.now());

        context.bindings.send = {
            body: model,
            contentType: "application/json",
            scheduledEnqueueTimeUtc: new Date(Date.now() + (model.addMinutes * 60000))
        }
    }
    
    context.res = {
        status: err ? 500 : 200,
        body: err
    };

    context.done(err);
};