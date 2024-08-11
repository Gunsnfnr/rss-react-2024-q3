import { describe, test, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../store';
import { Provider } from 'react-redux';
import Main from '../components/Main/Main';
import { mockCharactersData } from './mocks/mockCharactersData';

vi.mock('next/navigation', () => {
  return {
    useRouter: vi.fn(() => ({
      push: vi.fn(),
    })),
    useSearchParams: vi.fn(() => ({
      get: vi.fn(),
    })),
  };
});

describe('test Main', () => {
  test('test render Main', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Main charactersData={mockCharactersData} />
        </Provider>
      </MemoryRouter>,
    );
    const textOntheButton = screen.getByText('Search');

    expect(textOntheButton).toBeInTheDocument();
  });
});
