# Azure Functions
Diving deep into a hack-a-thon, with Functions.
fakeload (test) -> API -> Worker -> fakehook (test)

Functions
- fake-hook: used to provide an endpoint to call out to.
- fake-load: cron-job, to push events through the system.
- publish: publishes an action on the queue
- register: registers a user/action to a web hook
- worker: calls web hooks, when message is pushed through queue


## Deployment

[![Deploy to Azure](http://azuredeploy.net/deploybutton.svg)](https://azuredeploy.net/)

[Azure-Cli](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)
az group deployment create --name deploying --resource-group oss --template-file azure-deploy.json --parameters azure-deploy.params.json
