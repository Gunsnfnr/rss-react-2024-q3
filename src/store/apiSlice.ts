import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, CharactersData } from '../components/Main/Main';

export const swCharactersApi = createApi({
  reducerPath: 'swCharactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/people/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharactersData, string>({
      query: (request: string) => `?search=${request}`,
    }),
    getCharacterById: builder.query<Character, string | undefined>({
      query: (idOfCharacter: string | undefined) => `${idOfCharacter}/`,
    }),
  }),
});
