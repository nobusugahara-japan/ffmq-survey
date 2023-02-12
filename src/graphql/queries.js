/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFfmq2Data = /* GraphQL */ `
  query GetFfmq2Data($id: ID!) {
    getFfmq2Data(id: $id) {
      id
      companyId
      personId
      createdAt
      updatedAt
      ffmqScore
    }
  }
`;
export const listFfmq2Data = /* GraphQL */ `
  query ListFfmq2Data(
    $filter: ModelFfmq2DataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFfmq2Data(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyId
        personId
        createdAt
        updatedAt
        ffmqScore
      }
      nextToken
    }
  }
`;
