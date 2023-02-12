// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Ffmq2Data } = initSchema(schema);

export {
  Ffmq2Data
};