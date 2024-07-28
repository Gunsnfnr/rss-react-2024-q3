import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import Pagination from '../components/Pagination/Pagination';
import { store } from '../store';
import { Provider } from 'react-redux';

describe('test Pagination', () => {
  test('test render Pagination', () => {
    const handleBtn = () => {
      localStorage.setItem('gunsnfnr.swQuery', '');
    };
    render(
      <Provider store={store}>
        <Pagination handleBtn={handleBtn} page={1} charactersOnThisPage={10} />
      </Provider>,
    );

    const button = screen.getByText('Prev');
    expect(button).toBeTruthy();
  });
});
