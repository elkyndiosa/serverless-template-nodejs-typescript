/* eslint-disable global-require */
import * as dotenv from 'dotenv';

const AWS = require('aws-sdk');

dotenv.config();
const { IS_OFFLINE } = process.env;

let AWS_WITH_XRAY;
if (!IS_OFFLINE) {
  const AWSXRay = require('aws-xray-sdk-core');
  AWS_WITH_XRAY = AWSXRay.captureAWS(AWS);
}
export default IS_OFFLINE ? AWS : AWS_WITH_XRAY;
