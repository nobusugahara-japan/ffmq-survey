import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCompanyName = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CompanyName, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCompanyName = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CompanyName, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CompanyName = LazyLoading extends LazyLoadingDisabled ? EagerCompanyName : LazyCompanyName

export declare const CompanyName: (new (init: ModelInit<CompanyName>) => CompanyName) & {
  copyOf(source: CompanyName, mutator: (draft: MutableModel<CompanyName>) => MutableModel<CompanyName> | void): CompanyName;
}

type EagerConditionData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ConditionData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly CompanyName?: string | null;
  readonly personId?: number | null;
  readonly ConditionData?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConditionData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ConditionData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly CompanyName?: string | null;
  readonly personId?: number | null;
  readonly ConditionData?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ConditionData = LazyLoading extends LazyLoadingDisabled ? EagerConditionData : LazyConditionData

export declare const ConditionData: (new (init: ModelInit<ConditionData>) => ConditionData) & {
  copyOf(source: ConditionData, mutator: (draft: MutableModel<ConditionData>) => MutableModel<ConditionData> | void): ConditionData;
}

type EagerAttributeData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AttributeData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyName?: string | null;
  readonly personId?: number | null;
  readonly attributeData?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAttributeData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AttributeData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyName?: string | null;
  readonly personId?: number | null;
  readonly attributeData?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AttributeData = LazyLoading extends LazyLoadingDisabled ? EagerAttributeData : LazyAttributeData

export declare const AttributeData: (new (init: ModelInit<AttributeData>) => AttributeData) & {
  copyOf(source: AttributeData, mutator: (draft: MutableModel<AttributeData>) => MutableModel<AttributeData> | void): AttributeData;
}

type EagerFfmq2Data = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ffmq2Data, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyName?: string | null;
  readonly personId?: number | null;
  readonly Ffmq2Data?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFfmq2Data = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ffmq2Data, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyName?: string | null;
  readonly personId?: number | null;
  readonly Ffmq2Data?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ffmq2Data = LazyLoading extends LazyLoadingDisabled ? EagerFfmq2Data : LazyFfmq2Data

export declare const Ffmq2Data: (new (init: ModelInit<Ffmq2Data>) => Ffmq2Data) & {
  copyOf(source: Ffmq2Data, mutator: (draft: MutableModel<Ffmq2Data>) => MutableModel<Ffmq2Data> | void): Ffmq2Data;
}