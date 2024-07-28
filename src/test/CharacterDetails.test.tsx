import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import CharacterDetails from '../components/CharacterDetails/CharacterDetails';
import { store } from '../store';
import { Provider } from 'react-redux';

describe('test CharacterDetails', () => {
  test('test loading CharacterDetails', () => {
    render(
      <Provider store={store}>
        <CharacterDetails />
      </Provider>,
    );
    const text = screen.getByText('Loading...');

    expect(text).toBeInTheDocument();
  });
});
