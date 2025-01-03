import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import Download from '../components/Download/Download';
import { Provider } from 'react-redux';
import mockStore from './mocks/mockStore';

URL.createObjectURL = vi.fn();

describe('test Download', () => {
  test('test render Download', () => {
    render(
      <Provider store={mockStore}>
        <Download />
      </Provider>,
    );
    const text = screen.getByText('Download');

    expect(text).toBeInTheDocument();
  });
});
