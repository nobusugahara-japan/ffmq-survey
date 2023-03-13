/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompanyName = /* GraphQL */ `
  query GetCompanyName($id: ID!) {
    getCompanyName(id: $id) {
      id
      companyName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCompanyNames = /* GraphQL */ `
  query ListCompanyNames(
    $filter: ModelCompanyNameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanyNames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCompanyNames = /* GraphQL */ `
  query SyncCompanyNames(
    $filter: ModelCompanyNameFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompanyNames(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        companyName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getConditionData = /* GraphQL */ `
  query GetConditionData($id: ID!) {
    getConditionData(id: $id) {
      id
      CompanyName
      personId
      ConditionData
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listConditionData = /* GraphQL */ `
  query ListConditionData(
    $filter: ModelConditionDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConditionData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        CompanyName
        personId
        ConditionData
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncConditionData = /* GraphQL */ `
  query SyncConditionData(
    $filter: ModelConditionDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConditionData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        CompanyName
        personId
        ConditionData
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAttributeData = /* GraphQL */ `
  query GetAttributeData($id: ID!) {
    getAttributeData(id: $id) {
      id
      companyName
      personId
      attributeData
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAttributeData = /* GraphQL */ `
  query ListAttributeData(
    $filter: ModelAttributeDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttributeData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyName
        personId
        attributeData
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAttributeData = /* GraphQL */ `
  query SyncAttributeData(
    $filter: ModelAttributeDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAttributeData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        companyName
        personId
        attributeData
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFfmq2Data = /* GraphQL */ `
  query GetFfmq2Data($id: ID!) {
    getFfmq2Data(id: $id) {
      id
      companyName
      personId
      Ffmq2Data
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        companyName
        personId
        Ffmq2Data
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFfmq2Data = /* GraphQL */ `
  query SyncFfmq2Data(
    $filter: ModelFfmq2DataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFfmq2Data(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        companyName
        personId
        Ffmq2Data
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
