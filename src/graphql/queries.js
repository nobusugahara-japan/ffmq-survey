/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFfmq2Data = /* GraphQL */ `
  query GetFfmq2Data($id: ID!) {
    getFfmq2Data(id: $id) {
      id
      companyId
      personId
      Ffmq2Data
      createdAt
      updatedAt
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
        Ffmq2Data
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchFfmq2Data = /* GraphQL */ `
  query SearchFfmq2Data(
    $filter: SearchableFfmq2DataFilterInput
    $sort: [SearchableFfmq2DataSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableFfmq2DataAggregationInput]
  ) {
    searchFfmq2Data(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        companyId
        personId
        Ffmq2Data
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
