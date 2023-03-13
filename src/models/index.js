// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CompanyName, ConditionData, AttributeData, Ffmq2Data } = initSchema(schema);

export {
  CompanyName,
  ConditionData,
  AttributeData,
  Ffmq2Data
};