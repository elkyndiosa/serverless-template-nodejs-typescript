import middy from '@middy/core';
import middyJsonBodyParser from '@middy/http-json-body-parser';

const middyfy = (handler) => middy(handler).use(middyJsonBodyParser());
export default middyfy;
