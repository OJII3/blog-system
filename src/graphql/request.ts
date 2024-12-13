// @ts-nocheck
import * as Types from './types';

import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];

export const GetAllPostsDocument = gql`
    query GetAllPosts($folderPath: String!) {
  folderFromPath(path: $folderPath) {
    id
    name
    notes(first: 1000) {
      totalCount
      edges {
        node {
          id
          title
          createdAt
        }
      }
    }
  }
}
    `;
export const GetPostDocument = gql`
    query GetPost($id: ID!) {
  note(id: $id) {
    id
    title
    createdAt
    content
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAllPosts(variables: Types.GetAllPostsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetAllPostsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetAllPostsQuery>(GetAllPostsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllPosts', 'query', variables);
    },
    GetPost(variables: Types.GetPostQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Types.GetPostQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Types.GetPostQuery>(GetPostDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPost', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;