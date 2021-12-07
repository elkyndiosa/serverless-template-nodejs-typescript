/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable no-template-curly-in-string */
import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import middyfy from '@libs/lambda';
import HelloType from 'src/structures/hello.type';
import { errorResponse, Response, successResponse } from 'src/common/apiResponses';
import { Table } from 'dynamodb-onetable';
import client from '@libs/dynamoDB';

const MySchema = {
  version: '0.0.1',
  indexes: {
    primary: { hash: 'id', sort: 'city' },
    // gs1: { hash: 'gs1pk', sort: 'gs1sk', follow: true },
  },
  models: {
    User: {
      // pk: { type: String, value: 'account:${accountName}' },
      // sk: { type: String, value: 'user:${email}' },
      id: { type: String, required: true },
      city: { type: String, required: true },
      data: { type: String },
      // accountName: { type: String, required: false },
      // email: { type: String, required: false },
      // firstName: { type: String, required: false },
      // lastName: { type: String, required: false },
      // username: { type: String, required: false },
      // role: { type: String, enum: ['user', 'admin'], required: false, default: 'user' },
      balance: { type: Number },
      status: { type: String },
      // gs1pk: { type: String, value: 'user-email:${city}' },
      // gs1sk: { type: String, value: 'user:' },
    },
  },
};
const create: ValidatedEventAPIGatewayProxyEvent<HelloType> = async (): Promise<Response> => {
  try {
    const table = new Table({
      client,
      name: 'user-local',
      schema: MySchema,
    });
    const User = table.getModel('User');
    const id = '8e7bbe6a-4afc-4117-9218-67081afsc935b-2';
    const city = 'Acme medellin';
    // await User.create(
    //   {
    //     id: '8e7bbe6a-4afc-4117-9218-67081afsc935b-2',
    //     city: 'Acme medellin',
    //     data: 'tesst2',
    //   },
    //   { log: true },
    // ); //  Emit console trace for the command and result
    // const users = await User.scan({});
    // const user = await User.get({
    //   id: '8e7bbe6a-4afc-4117-9218-67081afsc935b',
    //   city: 'Acme barranquilla',
    // });
    // const users = await User.find({ id, data: 'tesst2' });
    // let users = await User.find(
    //   { id },
    //   {
    //     where: '${data} = {"tesst22"}',
    //   },
    // );
    // const users = await User.find({ id }, { count: true });
    // console.log(users);
    // const { count } = users;
    // await User.update({ id, data: 'tesst2' }); NO SABEMOS QUE ES
    // await User.update({ id, city }, { add: { balance: 10.0 } });
    // await User.update({ id, city }, { set: { status: '{active}' } });
    let transaction = {};
    await User.update({ id, city }, { transaction });
    await table.transact('write', transaction);
    const users = await User.scan({});
    return successResponse({
      message: `Hello, welcome to the exciting Serverless world!`,
      users,
    });
  } catch (error) {
    console.log('error', error);

    return errorResponse({
      message: `Hello, welcome to the exciting Serverless world!`,
      error,
    });
  }
};

export const main = middyfy(create);
