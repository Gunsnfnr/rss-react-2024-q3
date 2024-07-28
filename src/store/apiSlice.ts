import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, CharactersData } from '../components/Main/Main';

export interface QueryArgument {
  request: string;
  page: number;
}

export const swCharactersApi = createApi({
  reducerPath: 'swCharactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/people/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharactersData, QueryArgument>({
      query: (params: { request: string; page: number }) =>
        `?search=${params.request}&page=${params.page ? params.page : 1}`,
    }),
    getCharacterById: builder.query<Character, string | undefined>({
      query: (idOfCharacter: string | undefined) => `${idOfCharacter}/`,
    }),
  }),
});
