import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CharactersData } from '../components/Main/Main';

export const swCharactersApi = createApi({
  reducerPath: 'swCharactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/people/' }),
  endpoints: (builder) => ({
    searchCharacters: builder.query<CharactersData, string>({
      query: (searchString: string) => `?search=${searchString}`,
    }),
  }),
});
