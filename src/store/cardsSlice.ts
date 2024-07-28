import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../components/Main/Main';

export interface SelectedCharactersCardsState {
  selectedCards: Character[];
}

const initialState: SelectedCharactersCardsState = {
  selectedCards: [],
};

export const cardsSlice = createSlice({
  name: 'charactersCards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Character>) => {
      state.selectedCards = [...state.selectedCards, action.payload];
    },
    removeCard: (state, action: PayloadAction<Character>) => {
      state.selectedCards = state.selectedCards.filter((element) => element.name !== action.payload.name);
    },
    removeAllCards: (state) => {
      state.selectedCards = [];
    },
  },
});

export const { addCard, removeCard, removeAllCards } = cardsSlice.actions;

export default cardsSlice.reducer;
