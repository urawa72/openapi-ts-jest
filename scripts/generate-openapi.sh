#!/usr/bin/env bash

docker run --rm \
  -v ${PWD}:/local \
  openapitools/openapi-generator-cli generate \
  -i /local/docs/schema.yaml \
  -c /local/openapi-generator-config.yaml \
  -g typescript-axios \
  -o /local/client
