import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Mutation = {
  __typename: 'Mutation';
  addPlant: Plant;
  editPlant: Plant;
  removePlant: Plant;
  waterPlant?: Maybe<Scalars['Boolean']>;
};


export type MutationAddPlantArgs = {
  plant?: InputMaybe<PlantInput>;
};


export type MutationEditPlantArgs = {
  id?: InputMaybe<Scalars['ID']>;
  plant?: InputMaybe<PlantInput>;
};


export type MutationRemovePlantArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationWaterPlantArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Plant = {
  __typename: 'Plant';
  id: Scalars['ID'];
  lastWatered?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  waterFrequency: Scalars['Int'];
};

export type PlantInput = {
  name: Scalars['String'];
  waterFrequency: Scalars['Int'];
};

export type Query = {
  __typename: 'Query';
  plant?: Maybe<Plant>;
  plants: Array<Plant>;
};


export type QueryPlantArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type AddPlantMutationVariables = Exact<{
  name: Scalars['String'];
  waterFrequency: Scalars['Int'];
}>;


export type AddPlantMutation = { __typename: 'Mutation', addPlant: { __typename: 'Plant', id: string, name: string } };

export type EditPlantMutationVariables = Exact<{
  id: Scalars['ID'];
  plant: PlantInput;
}>;


export type EditPlantMutation = { __typename: 'Mutation', editPlant: { __typename: 'Plant', id: string, name: string, lastWatered?: any | null, waterFrequency: number } };

export type PlantQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type PlantQuery = { __typename: 'Query', plant?: { __typename: 'Plant', id: string, name: string, lastWatered?: any | null, waterFrequency: number } | null };

export type PlantsQueryVariables = Exact<{ [key: string]: never; }>;


export type PlantsQuery = { __typename: 'Query', plants: Array<{ __typename: 'Plant', id: string, name: string, lastWatered?: any | null, waterFrequency: number }> };

export type RemovePlantMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type RemovePlantMutation = { __typename: 'Mutation', removePlant: { __typename: 'Plant', id: string, name: string } };

export type WaterPlantMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WaterPlantMutation = { __typename: 'Mutation', waterPlant?: boolean | null };


export const AddPlantDocument = gql`
    mutation addPlant($name: String!, $waterFrequency: Int!) {
  addPlant(plant: {name: $name, waterFrequency: $waterFrequency}) {
    id
    name
  }
}
    `;
export type AddPlantMutationFn = Apollo.MutationFunction<AddPlantMutation, AddPlantMutationVariables>;

/**
 * __useAddPlantMutation__
 *
 * To run a mutation, you first call `useAddPlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPlantMutation, { data, loading, error }] = useAddPlantMutation({
 *   variables: {
 *      name: // value for 'name'
 *      waterFrequency: // value for 'waterFrequency'
 *   },
 * });
 */
export function useAddPlantMutation(baseOptions?: Apollo.MutationHookOptions<AddPlantMutation, AddPlantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPlantMutation, AddPlantMutationVariables>(AddPlantDocument, options);
      }
export type AddPlantMutationHookResult = ReturnType<typeof useAddPlantMutation>;
export type AddPlantMutationResult = Apollo.MutationResult<AddPlantMutation>;
export type AddPlantMutationOptions = Apollo.BaseMutationOptions<AddPlantMutation, AddPlantMutationVariables>;
export const EditPlantDocument = gql`
    mutation editPlant($id: ID!, $plant: PlantInput!) {
  editPlant(id: $id, plant: $plant) {
    id
    name
    lastWatered
    waterFrequency
  }
}
    `;
export type EditPlantMutationFn = Apollo.MutationFunction<EditPlantMutation, EditPlantMutationVariables>;

/**
 * __useEditPlantMutation__
 *
 * To run a mutation, you first call `useEditPlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPlantMutation, { data, loading, error }] = useEditPlantMutation({
 *   variables: {
 *      id: // value for 'id'
 *      plant: // value for 'plant'
 *   },
 * });
 */
export function useEditPlantMutation(baseOptions?: Apollo.MutationHookOptions<EditPlantMutation, EditPlantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditPlantMutation, EditPlantMutationVariables>(EditPlantDocument, options);
      }
export type EditPlantMutationHookResult = ReturnType<typeof useEditPlantMutation>;
export type EditPlantMutationResult = Apollo.MutationResult<EditPlantMutation>;
export type EditPlantMutationOptions = Apollo.BaseMutationOptions<EditPlantMutation, EditPlantMutationVariables>;
export const PlantDocument = gql`
    query plant($id: ID) {
  plant(id: $id) {
    id
    name
    lastWatered
    waterFrequency
  }
}
    `;

/**
 * __usePlantQuery__
 *
 * To run a query within a React component, call `usePlantQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePlantQuery(baseOptions?: Apollo.QueryHookOptions<PlantQuery, PlantQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlantQuery, PlantQueryVariables>(PlantDocument, options);
      }
export function usePlantLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlantQuery, PlantQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlantQuery, PlantQueryVariables>(PlantDocument, options);
        }
export type PlantQueryHookResult = ReturnType<typeof usePlantQuery>;
export type PlantLazyQueryHookResult = ReturnType<typeof usePlantLazyQuery>;
export type PlantQueryResult = Apollo.QueryResult<PlantQuery, PlantQueryVariables>;
export const PlantsDocument = gql`
    query plants {
  plants {
    id
    name
    lastWatered
    waterFrequency
  }
}
    `;

/**
 * __usePlantsQuery__
 *
 * To run a query within a React component, call `usePlantsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlantsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlantsQuery(baseOptions?: Apollo.QueryHookOptions<PlantsQuery, PlantsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlantsQuery, PlantsQueryVariables>(PlantsDocument, options);
      }
export function usePlantsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlantsQuery, PlantsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlantsQuery, PlantsQueryVariables>(PlantsDocument, options);
        }
export type PlantsQueryHookResult = ReturnType<typeof usePlantsQuery>;
export type PlantsLazyQueryHookResult = ReturnType<typeof usePlantsLazyQuery>;
export type PlantsQueryResult = Apollo.QueryResult<PlantsQuery, PlantsQueryVariables>;
export const RemovePlantDocument = gql`
    mutation removePlant($id: ID) {
  removePlant(id: $id) {
    id
    name
  }
}
    `;
export type RemovePlantMutationFn = Apollo.MutationFunction<RemovePlantMutation, RemovePlantMutationVariables>;

/**
 * __useRemovePlantMutation__
 *
 * To run a mutation, you first call `useRemovePlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePlantMutation, { data, loading, error }] = useRemovePlantMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemovePlantMutation(baseOptions?: Apollo.MutationHookOptions<RemovePlantMutation, RemovePlantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemovePlantMutation, RemovePlantMutationVariables>(RemovePlantDocument, options);
      }
export type RemovePlantMutationHookResult = ReturnType<typeof useRemovePlantMutation>;
export type RemovePlantMutationResult = Apollo.MutationResult<RemovePlantMutation>;
export type RemovePlantMutationOptions = Apollo.BaseMutationOptions<RemovePlantMutation, RemovePlantMutationVariables>;
export const WaterPlantDocument = gql`
    mutation waterPlant($id: ID!) {
  waterPlant(id: $id)
}
    `;
export type WaterPlantMutationFn = Apollo.MutationFunction<WaterPlantMutation, WaterPlantMutationVariables>;

/**
 * __useWaterPlantMutation__
 *
 * To run a mutation, you first call `useWaterPlantMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useWaterPlantMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [waterPlantMutation, { data, loading, error }] = useWaterPlantMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useWaterPlantMutation(baseOptions?: Apollo.MutationHookOptions<WaterPlantMutation, WaterPlantMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<WaterPlantMutation, WaterPlantMutationVariables>(WaterPlantDocument, options);
      }
export type WaterPlantMutationHookResult = ReturnType<typeof useWaterPlantMutation>;
export type WaterPlantMutationResult = Apollo.MutationResult<WaterPlantMutation>;
export type WaterPlantMutationOptions = Apollo.BaseMutationOptions<WaterPlantMutation, WaterPlantMutationVariables>;