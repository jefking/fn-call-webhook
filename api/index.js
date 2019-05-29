// const { ServiceBusClient } = require("@azure/service-bus");

// const sbClient = ServiceBusClient.createFromConnectionString(process.env.ServiceBus); 
// const topicClient = sbClient.createTopicClient(process.env.TopicName);
// const sender = topicClient.createSender();

module.exports = async function (context, req) {
    let model = (typeof req.body != 'undefined' && typeof req.body == 'object') ? req.body : null;
    let err = !model ? "no data; or invalid payload in body" : null;

    context.log(model);

    if (!err) {
        const timeNowUtc = new Date(Date.now());
        const scheduledEnqueueTimeUtc = new Date(Date.now() + (model.addMinutes * 60000));

        model.Now = timeNowUtc;
        model.At = scheduledEnqueueTimeUtc;

        context.bindings.send = {
            body: model,
            contentType: "application/json",
            scheduledEnqueueTimeUtc: scheduledEnqueueTimeUtc,
            userProperties: {
                resource: model.resource,
                action: model.action
            }
        }
    }
    
    context.res = {
        status: err ? 500 : 200,
        body: err
    };

    context.done(err);
};