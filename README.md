# Azure Functions
Diving deep into a hack-a-thon, with Functions.
fakeload (test) -> API -> Worker -> fakehook (test)

Functions
- fake-hook: used to provide an endpoint to call out to.
- fake-load: cron-job, to push events through the system.
- publish: publishes an action on the queue
- register: registers a user/action to a web hook
- worker: calls web hooks, when message is pushed through queue

Order
Fake Load -> Publish (event) -> Service Bus Queue -> Worker -> loads data from /registry -> calls registered webhook (Fake-hook)
- Fake Load, generates fake/random data
- Publish, where you push your events to (what Fake Load calls)

## Deployment

[![Deploy to Azure](http://azuredeploy.net/deploybutton.svg)](https://azuredeploy.net/)

### Pre-requisits

[Azure-Cli](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)

### Step 1.
```
az group create -l westus2 -n oss
```

### Step 2.
```
az group deployment create --name deploying --resource-group oss --template-file azure-deploy.json --parameters azure-deploy.params.json
```

### Step 3
Function App configuration 'LoadPost' set to URL of Publish function

### Step 4.
Update files in ./data: <CHANGE URL> -> URL of 'fake-hook' function; which simulates catching web-hook calls.

### Step 5.
Upload files to Blob Storage; local ./data -> storage acc/registry