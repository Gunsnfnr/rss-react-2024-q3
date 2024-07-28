import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard/CharacterCard';
import { mockCharacter, mockCharacter2 } from './mocks/mockCharacters';
import { store } from '../store';
import { Provider } from 'react-redux';

describe('test CharacterCard', () => {
  test('test render checkbox', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CharacterCard character={mockCharacter} key={'Obi-Wan Kenobi'} />
        </Provider>
      </MemoryRouter>,
    );

    const checkbox = screen.getByTitle('Click to choose');
    expect(checkbox).toBeInTheDocument();
  });

  test('test render character1', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CharacterCard character={mockCharacter} key={'Obi-Wan Kenobi'} />
        </Provider>
      </MemoryRouter>,
    );

    const checkbox = screen.getByText('Obi-Wan Kenobi');
    expect(checkbox).toBeInTheDocument();
  });

  test('test render character2', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <CharacterCard character={mockCharacter2} key={'Darth Vader'} />
        </Provider>
      </MemoryRouter>,
    );

    const checkbox = screen.getByText('Darth Vader');
    expect(checkbox).toBeInTheDocument();
  });
});
