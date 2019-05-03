// Code generated by Prisma (prisma@1.32.0-beta). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  todo: (where?: todoWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  todo: (where: todoWhereUniqueInput) => todoPromise;
  todoes: (args?: {
    where?: todoWhereInput;
    orderBy?: todoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<todo>;
  todoesConnection: (args?: {
    where?: todoWhereInput;
    orderBy?: todoOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => todoConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createtodo: (data: todoCreateInput) => todoPromise;
  updatetodo: (args: {
    data: todoUpdateInput;
    where: todoWhereUniqueInput;
  }) => todoPromise;
  updateManytodoes: (args: {
    data: todoUpdateManyMutationInput;
    where?: todoWhereInput;
  }) => BatchPayloadPromise;
  upserttodo: (args: {
    where: todoWhereUniqueInput;
    create: todoCreateInput;
    update: todoUpdateInput;
  }) => todoPromise;
  deletetodo: (where: todoWhereUniqueInput) => todoPromise;
  deleteManytodoes: (where?: todoWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  todo: (
    where?: todoSubscriptionWhereInput
  ) => todoSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type todoOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "description_ASC"
  | "description_DESC"
  | "completed_ASC"
  | "completed_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface todoCreateInput {
  id?: ID_Input;
  description: String;
  completed: Boolean;
}

export interface todoUpdateInput {
  description?: String;
  completed?: Boolean;
}

export interface todoWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  completed?: Boolean;
  completed_not?: Boolean;
  AND?: todoWhereInput[] | todoWhereInput;
  OR?: todoWhereInput[] | todoWhereInput;
  NOT?: todoWhereInput[] | todoWhereInput;
}

export interface todoUpdateManyMutationInput {
  description?: String;
  completed?: Boolean;
}

export interface todoSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: todoWhereInput;
  AND?: todoSubscriptionWhereInput[] | todoSubscriptionWhereInput;
  OR?: todoSubscriptionWhereInput[] | todoSubscriptionWhereInput;
  NOT?: todoSubscriptionWhereInput[] | todoSubscriptionWhereInput;
}

export type todoWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface Aggregatetodo {
  count: Int;
}

export interface AggregatetodoPromise
  extends Promise<Aggregatetodo>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatetodoSubscription
  extends Promise<AsyncIterator<Aggregatetodo>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface todoPreviousValues {
  id: ID_Output;
  description: String;
  completed: Boolean;
}

export interface todoPreviousValuesPromise
  extends Promise<todoPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  description: () => Promise<String>;
  completed: () => Promise<Boolean>;
}

export interface todoPreviousValuesSubscription
  extends Promise<AsyncIterator<todoPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  description: () => Promise<AsyncIterator<String>>;
  completed: () => Promise<AsyncIterator<Boolean>>;
}

export interface todoEdge {
  node: todo;
  cursor: String;
}

export interface todoEdgePromise extends Promise<todoEdge>, Fragmentable {
  node: <T = todoPromise>() => T;
  cursor: () => Promise<String>;
}

export interface todoEdgeSubscription
  extends Promise<AsyncIterator<todoEdge>>,
    Fragmentable {
  node: <T = todoSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface todoSubscriptionPayload {
  mutation: MutationType;
  node: todo;
  updatedFields: String[];
  previousValues: todoPreviousValues;
}

export interface todoSubscriptionPayloadPromise
  extends Promise<todoSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = todoPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = todoPreviousValuesPromise>() => T;
}

export interface todoSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<todoSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = todoSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = todoPreviousValuesSubscription>() => T;
}

export interface todo {
  id: ID_Output;
  description: String;
  completed: Boolean;
}

export interface todoPromise extends Promise<todo>, Fragmentable {
  id: () => Promise<ID_Output>;
  description: () => Promise<String>;
  completed: () => Promise<Boolean>;
}

export interface todoSubscription
  extends Promise<AsyncIterator<todo>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  description: () => Promise<AsyncIterator<String>>;
  completed: () => Promise<AsyncIterator<Boolean>>;
}

export interface todoConnection {
  pageInfo: PageInfo;
  edges: todoEdge[];
}

export interface todoConnectionPromise
  extends Promise<todoConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<todoEdge>>() => T;
  aggregate: <T = AggregatetodoPromise>() => T;
}

export interface todoConnectionSubscription
  extends Promise<AsyncIterator<todoConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<todoEdgeSubscription>>>() => T;
  aggregate: <T = AggregatetodoSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "todo",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
