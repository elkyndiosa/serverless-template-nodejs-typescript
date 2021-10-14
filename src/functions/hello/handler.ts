import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import middyfy from '@libs/lambda';

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event): Promise<any> => {
  try {
    return formatJSONResponse({
      message: `Hello ${event.body}, welcome to the exciting Serverless world!`,
      event,
    });
  } catch (error) {
    return formatJSONResponse({
      message: `Hello ${event.body}, welcome to the exciting Serverless world!`,
      event,
    });
  }
};

export const main = middyfy(hello);
