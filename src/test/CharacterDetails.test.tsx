import { describe, test, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import CharacterDetails from '../components/CharacterDetails/CharacterDetails';
import { store } from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mockCharacter } from './mocks/mockCharacters';

vi.mock('next/navigation', () => vi.importActual('next-router-mock'));

describe('test CharacterDetails', () => {
  test('test loading CharacterDetails', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CharacterDetails characterData={mockCharacter} />
        </Provider>
      </BrowserRouter>,
    );
    const text = screen.getByText('Obi-Wan Kenobi');

    expect(text).toBeInTheDocument();
  });
});
