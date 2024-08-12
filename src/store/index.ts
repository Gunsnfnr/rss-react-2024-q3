import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardsSlice';

export const store = configureStore({
  reducer: {
    charactersCards: cardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
