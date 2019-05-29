module.exports = async function (context, req) {
    let model = (typeof req.body != 'undefined' && typeof req.body == 'object') ? req.body : null;
    let err = !model ? "no data; or invalid payload in body" : null;
    let err = !model.url ? "no url" : null;
    let err = !model.action ? "no action" : null;
    let err = !model.resource ? "no resource" : null;
    let err = !model.tenantId ? "no tenand id" : null;

    context.res = {
        status: err ? 500 : 200,
        body: err
    };

    context.bindings.json = model;
    
    context.done(err);
};