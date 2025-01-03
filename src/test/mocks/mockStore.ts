import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Character } from '../../components/Main/Main';
import { mockCharacter } from './mockCharacters';

const initialState: { selectedCards: Character[] } = { selectedCards: [mockCharacter] };

const selectedCardsReducer = createSlice({
  name: 'charactersCards',
  initialState,
  reducers: {},
});

const mockStore = configureStore({
  reducer: {
    charactersCards: selectedCardsReducer.reducer,
  },
});

export default mockStore;
