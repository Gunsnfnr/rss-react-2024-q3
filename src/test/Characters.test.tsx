import { describe, test, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import Characters from '../components/Characters/Characters';
import { mockCharacter } from './mocks/mockCharacters';
import { store } from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('test Characters', () => {
  test('test render', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Characters searchResults={[mockCharacter]} />,
        </Provider>
      </BrowserRouter>,
    );

    const checkbox = screen.getByTitle('Click to choose');
    expect(checkbox).toBeInTheDocument();
  });
});
