import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character } from '../components/Main/Main';

export const swCharacterApi = createApi({
  reducerPath: 'swCharacterApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/people/' }),
  endpoints: (builder) => ({
    getCharacterById: builder.query<Character, string | undefined>({
      query: (idOfCharacter: string | undefined) => `${idOfCharacter}/`,
    }),
  }),
});
