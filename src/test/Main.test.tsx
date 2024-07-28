import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../store';
import { Provider } from 'react-redux';
import Main from '../components/Main/Main';

describe('test Main', () => {
  test('test render Main', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </MemoryRouter>,
    );
    const textOntheButton = screen.getByText('Search');

    expect(textOntheButton).toBeInTheDocument();
  });

  test('test render Main loading', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </MemoryRouter>,
    );
    const text = screen.getByText('Loading...');

    expect(text).toBeInTheDocument();
  });
});
