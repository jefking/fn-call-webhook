# Azure Functions
Diving deep into a hack-a-thon, with Functions.
fakeload (test) -> API -> Worker -> fakehook (test)



## Deployment

[![Deploy to Azure](http://azuredeploy.net/deploybutton.svg)](https://azuredeploy.net/)

[Azure-Cli](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)
az group deployment create --name deploying --resource-group oss --template-file azure-deploy.json --parameters azure-deploy.params.json