module.exports = async function (context, req) {
    let model = (typeof req.body != 'undefined' && typeof req.body == 'object') ? req.body : null;
    let err = ''
    err += !model ? "no data; or invalid payload in body" : null;
    err += !model.url ? "no url" : null;
    err += !model.action ? "no action" : null;
    err += !model.resource ? "no resource" : null;
    err += !model.tenantId ? "no tenand id" : null;

    context.res = {
        status: err == '' ? 200 : 500,
        body: err
    };

    context.bindings.json = model;
    
    context.done(err == '' ? null : err);
};