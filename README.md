# fn-call-webhook

## Deployment
az group deployment create --name deploying --resource-group oss --template-file azure-deploy.json --parameters azure-deploy.params.json

## CI
[![Build status](https://dev.azure.com/jefkin/oss/_apis/build/status/fn-call-webhook)](https://dev.azure.com/jefkin/oss/_build/latest?definitionId=24)