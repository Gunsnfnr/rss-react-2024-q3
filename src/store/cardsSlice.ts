import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../components/Main/Main';

export interface cardsState {
  selectedCards: Character[];
}

const initialState: cardsState = {
  selectedCards: [],
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Character>) => {
      state.selectedCards = [...state.selectedCards, action.payload];
      console.log('state.selectedCards: ', state.selectedCards);
    },
    removeCard: (state, action: PayloadAction<Character>) => {
      state.selectedCards = state.selectedCards.filter((element) => element.name !== action.payload.name);
      console.log('state.selectedCards: ', state.selectedCards);
    },
    removeAllCards: (state) => {
      state.selectedCards = [];
      console.log('state.selectedCards: ', state.selectedCards);
    },
  },
});

export const { addCard, removeCard, removeAllCards } = cardsSlice.actions;

export default cardsSlice.reducer;
