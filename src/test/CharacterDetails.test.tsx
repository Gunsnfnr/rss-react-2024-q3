import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import CharacterDetails from '../components/CharacterDetails/CharacterDetails';
import { store } from '../store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('test CharacterDetails', () => {
  test('test loading CharacterDetails', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <CharacterDetails />
        </Provider>
      </BrowserRouter>,
    );
    const text = screen.getByText('Loading...');

    expect(text).toBeInTheDocument();
  });
});
