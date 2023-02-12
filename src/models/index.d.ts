import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerFfmq2Data = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ffmq2Data, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyId?: number | null;
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
  readonly companyId?: number | null;
  readonly personId?: number | null;
  readonly Ffmq2Data?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ffmq2Data = LazyLoading extends LazyLoadingDisabled ? EagerFfmq2Data : LazyFfmq2Data

export declare const Ffmq2Data: (new (init: ModelInit<Ffmq2Data>) => Ffmq2Data) & {
  copyOf(source: Ffmq2Data, mutator: (draft: MutableModel<Ffmq2Data>) => MutableModel<Ffmq2Data> | void): Ffmq2Data;
}