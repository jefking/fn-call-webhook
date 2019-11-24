const appInsights = require("applicationinsights");

module.exports = async function (context, req) {
    appInsights.setup().start();
    
    let model = (typeof req.body != 'undefined' && typeof req.body == 'object') ? req.body : null;
    let err = ''
    err += !model ? "no data; or invalid payload in body" : '';
    err += !model.url ? "no url" : '';
    err += !model.action ? "no action" : '';
    err += !model.resource ? "no resource" : '';
    err += !model.tenantId ? "no tenand id" : '';

    context.res = {
        status: err == '' ? 200 : 500,
        body: err
    };

    context.bindings.json = model;
    
    context.done(err == '' ? null : err);
};