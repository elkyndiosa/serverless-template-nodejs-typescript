import middy from '@middy/core';
import middyJsonBodyParser from '@middy/http-json-body-parser';

const middyfy: any = (handler) => middy(handler).use(middyJsonBodyParser());
export = middyfy;
