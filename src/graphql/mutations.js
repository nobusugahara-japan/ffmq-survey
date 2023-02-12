/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFfmq2Data = /* GraphQL */ `
  mutation CreateFfmq2Data(
    $input: CreateFfmq2DataInput!
    $condition: ModelFfmq2DataConditionInput
  ) {
    createFfmq2Data(input: $input, condition: $condition) {
      id
      companyId
      personId
      createdAt
      updatedAt
      ffmqScore
    }
  }
`;
export const updateFfmq2Data = /* GraphQL */ `
  mutation UpdateFfmq2Data(
    $input: UpdateFfmq2DataInput!
    $condition: ModelFfmq2DataConditionInput
  ) {
    updateFfmq2Data(input: $input, condition: $condition) {
      id
      companyId
      personId
      createdAt
      updatedAt
    }
  }
`;
export const deleteFfmq2Data = /* GraphQL */ `
  mutation DeleteFfmq2Data(
    $input: DeleteFfmq2DataInput!
    $condition: ModelFfmq2DataConditionInput
  ) {
    deleteFfmq2Data(input: $input, condition: $condition) {
      id
      companyId
      personId
      createdAt
      updatedAt
    }
  }
`;
