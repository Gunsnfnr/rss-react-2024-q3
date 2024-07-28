import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../store';
import { Provider } from 'react-redux';
import ChangeThemeButton from '../components/ChangeThemeButton/ChangeThemeButton';
import App from '../App';

describe('test App', () => {
  test('test render App', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>,
    );
    const textOntheButton = screen.getByText('Search');

    expect(textOntheButton).toBeInTheDocument();
  });
});

test('test render App loading', () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>,
  );
  const text = screen.getByText('Loading...');

  expect(text).toBeInTheDocument();
});

describe('test ChangeThemeButton', () => {
  test('test render', () => {
    render(<ChangeThemeButton />);

    const changeThemeButton = screen.getByTitle('Click to change');
    expect(changeThemeButton).toBeInTheDocument();
  });
});
