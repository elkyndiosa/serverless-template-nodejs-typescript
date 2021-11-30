import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import middyfy from '@libs/lambda';
import HelloType from 'src/structures/hello.type';
import { errorResponse, Response, successResponse } from 'src/common/apiResponses';

const hello: ValidatedEventAPIGatewayProxyEvent<HelloType> = async (): Promise<Response> => {
  try {
    return successResponse({
      message: `Hello, welcome to the exciting Serverless world!`,
    });
  } catch (error) {
    return errorResponse({
      message: `Hello, welcome to the exciting Serverless world!`,
    });
  }
};

export const main = middyfy(hello);
