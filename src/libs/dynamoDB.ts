import DynamoDB from 'aws-sdk/clients/dynamodb';
// import AWS from './aws-sdk';

const { IS_OFFLINE, JEST_WORKER_ID } = process.env;
let options = {};
if (IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://localhost:8000',
  };
}

if (JEST_WORKER_ID) {
  options = {
    region: 'local-env',
    endpoint: 'http://localhost:8000',
    sslEnabled: false,
  };
}
const client = new DynamoDB.DocumentClient(options);

// const dynamoDb = new AWS.DynamoDB.DocumentClient(options);
export default client;
