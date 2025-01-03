import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SelectedElements from '../components/SelectedElements/SelectedElements';
import { Provider } from 'react-redux';
import mockStore from './mocks/mockStore';

URL.createObjectURL = vi.fn();

describe('test SelectedElements', () => {
  test('test render', () => {
    render(
      <MemoryRouter>
        <Provider store={mockStore}>
          <SelectedElements />
        </Provider>
      </MemoryRouter>,
    );

    const button = screen.getByText('Unselect all');
    expect(button).toBeInTheDocument();
  });
});
