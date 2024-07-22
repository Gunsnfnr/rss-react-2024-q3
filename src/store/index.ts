import { configureStore } from '@reduxjs/toolkit';
import { swCharactersApi } from './sw-characters-api';
import { swCharacterApi } from './sw-character-api';
import cardsReducer from './cardsSlice';

export const store = configureStore({
  reducer: {
    swCharactersApi: swCharactersApi.reducer,
    swCharacterApi: swCharacterApi.reducer,
    cards: cardsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([swCharactersApi.middleware, swCharacterApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
