const azure = require('azure-sb');

module.exports = function (context, req) {
    context.log('api called');

    let model = {};
    var brokeredMessage = {
        body: JSON.stringify(model),
        customProperties: {
            //Add custom properties to filter on with Subscriptions
            'id':'2'
        }
    }

    let serviceBusService = azure.createServiceBusService(process.env.ServiceBus);
    serviceBusService.sendTopicMessage(process.env.TopicName, brokeredMessage, function (error) {
    });

    context.res = {
        status: 200
    };

    context.done();
}