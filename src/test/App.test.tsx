import { describe, test, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../store';
import { Provider } from 'react-redux';
import ChangeThemeButton from '../components/ChangeThemeButton/ChangeThemeButton';
import Home from '../pages';
import { mockCharactersData } from './mocks/mockCharactersData';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('test App', () => {
  test('test render App', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Home charactersData={mockCharactersData} characterData={null} />
        </Provider>
      </MemoryRouter>,
    );
    const textOntheButton = screen.getByText('Search');

    expect(textOntheButton).toBeInTheDocument();
  });
});

describe('test ChangeThemeButton', () => {
  test('test render', () => {
    render(<ChangeThemeButton />);

    const changeThemeButton = screen.getByTitle('Click to change');
    expect(changeThemeButton).toBeInTheDocument();
  });
});
