import { configureStore } from '@reduxjs/toolkit';
import { swCharactersApi } from './sw-characters-api';
import { swCharacterApi } from './sw-character-api';

export const store = configureStore({
  reducer: {
    swCharactersApi: swCharactersApi.reducer,
    swCharacterApi: swCharacterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([swCharactersApi.middleware, swCharacterApi.middleware]),
});
