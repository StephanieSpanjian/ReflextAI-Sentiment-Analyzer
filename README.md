# Reflex.AI Sentiment Analyzer

## Requirements

1. API application to analyze the sentiment of text in request.
2. Use TypeScript
3. Use Nest.js
4. Use Google Cloud Natural Language API `analyzeSentiment`
5. Response should contain score and magnitude.

## Next Steps:

1. Set up logger to log errors to Sentry, DataDog or something similiar.
2. Set up DB to store and memoize results. Check db before hitting GCP to limit requests to new text strings.
3. Dockerize solution.
4. Create a health check to replace the hello world endpoint.
5. Test that a duplicate request with exact same string does not call GCP.
6. Limit text input to GCP's limit or smaller and create unit test.

## Cloned from

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
