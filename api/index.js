const { ServiceBusClient } = require("@azure/service-bus");

const sbClient = ServiceBusClient.createFromConnectionString(process.env.ServiceBus); 
const topicClient = sbClient.createTopicClient(process.env.TopicName);
const sender = topicClient.createSender();

module.exports = async function (context, req) {
    let model = (typeof req.body != 'undefined' && typeof req.body == 'object') ? req.body : null;
    let err = !model ? "no data; or invalid payload in body" : null;

    context.log(model);

    if (!err) {
        const timeNowUtc = new Date(Date.now());
        const scheduledEnqueueTimeUtc = new Date(Date.now() + 60000);

        model.Now = timeNowUtc;
        model.At = scheduledEnqueueTimeUtc;

        let msg = {
            body: model, //JSON.stringify(model),
            contentType: "application/json",
            scheduledEnqueueTimeUtc: scheduledEnqueueTimeUtc,
            userProperties: {
                id: model.id
            }
        }

        context.log(msg);

       // await sender.scheduleMessages(scheduledEnqueueTimeUtc, [{body: "shipping an array of messages"}]);

        await sender.send(msg);
        //context.bindings.send = msg;
    }
    
    context.res = {
        status: err ? 500 : 200,
        body: err
    };

    context.done(err);
};