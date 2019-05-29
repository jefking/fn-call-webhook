
module.exports = async function (context, req) {
    let model = (typeof req.body != 'undefined' && typeof req.body == 'object') ? req.body : null;
    let err = !model ? "no data; or invalid payload in body" : null;

    context.log(model);
    let msg = null;

    if (!err) {
        const timeNowUtc = new Date(Date.now());
        const scheduledEnqueueTimeUtc = new Date(Date.now() + 60000);

        model.Now = timeNowUtc;
        model.At = scheduledEnqueueTimeUtc;

        msg = {
            body: JSON.stringify(model),
            contentType: "application/json",
            scheduledEnqueueTimeUtc: scheduledEnqueueTimeUtc,
            userProperties: {
                id: model.id
            }
        }

        context.log(context.binding.out);
    }
    
    context.res = {
        status: err ? 500 : 200,
        body: err
    };

    context.done(err, msg);
};