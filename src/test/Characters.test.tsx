import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import Characters from '../components/Characters/Characters';
import { mockCharacter } from './mocks/mockCharacters';
import { store } from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('test Characters', () => {
  test('test render', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Characters searchResults={[mockCharacter]} searchQuery={'Obi-Wan Kenobi'} />,
        </Provider>
      </BrowserRouter>,
    );

    const checkbox = screen.getByTitle('Click to choose');
    expect(checkbox).toBeInTheDocument();
  });
});
