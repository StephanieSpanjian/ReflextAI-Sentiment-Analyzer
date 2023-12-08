# Reflex.AI Sentiment Analyzer

## Requirements

1. API application to analyze the sentiment of text in request.
2. Use TypeScript
3. Use Nest.js
4. Set up Swagger UI
5. Use Google Cloud Natural Language API `analyzeSentiment` (More info: https://cloud.google.com/natural-language/docs/analyzing-sentiment#language-sentiment-string-protocol)
6. Response should contain score and magnitude.
7. DB storage of results.
8. Useful logging.
9. Basic unit and end to end testing.
10. Dockerize solution, if time.
11. Push solution to github or email a zip file.
12. If you run out of time, please be prepared to explain what you would have done with more time.

## Next Steps:

1.  Set up DB to store and memoize results. Check db before hitting GCP to limit requests to new text strings.
2.  Dockerize solution.
3.  Set up CI/CD for deployment to staging and production.
4.  Set up env vars for staging, production.
5.  Set up logger to log errors to Sentry, DataDog or something similiar.
6.  Create a health check to replace the hello world endpoint and create alert on cloud if api is down.
7.  Test that a duplicate request with exact same string does not call GCP.
8.  Limit text input to GCP's limit or smaller and create unit test.
9.  Remove special characters from user's input string and create test for this.

## Cloned from

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

- Make sure you are using node version 18+.
- Rename .example.env to .env and fill in key value. Key value can be created by going to https://console.cloud.google.com/apis/credentials once you have account set up.

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
