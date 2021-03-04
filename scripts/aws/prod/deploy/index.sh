#!/bin/bash
set -e

AWS_PROFILE=sops-prod
#sops -d .env.prod > .env

rm -rf .serverless*

cp serverless.yml.prod serverless.yml
npx serverless --debug

#rm .env
rm serverless.yml
