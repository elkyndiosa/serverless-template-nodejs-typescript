import type { AWS } from '@serverless/typescript';

import hello from '@functions/hello';

const stage = 'dev';
const serverlessConfiguration: AWS = {
  service: 'betting-roulette2',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
      packager: 'npm',
      excludeFiles: 'src/**/*.test.[t|j]s',
    },
    dynamodb: {
      start: {
        port: 8000,
        inMemory: true,
        migrate: true,
        seed: true,
        convertEmptyValues: true,
      },
      stages: [stage],
    },
    warmup: {
      enabled: true,
      events: {
        schedule: ['rate(5 minutes)'],
      },
      prewarm: true,
      concurrency: 1,
    },
    prune: {
      automatic: true,
      number: 5,
    },
    'serverless-offline': {
      httpPort: 4000,
    },
  },
  plugins: [
    'serverless-webpack',
    'serverless-dynamodb-local',
    'serverless-offline',
    'serverless-plugin-warmup',
    'serverless-dotenv-plugin',
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { hello },
};

module.exports = serverlessConfiguration;
