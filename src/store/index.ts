import { configureStore } from '@reduxjs/toolkit';
import { swCharactersApi } from './apiSlice';
import cardsReducer from './cardsSlice';

export const store = configureStore({
  reducer: {
    swCharactersApi: swCharactersApi.reducer,
    charactersCards: cardsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swCharactersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
