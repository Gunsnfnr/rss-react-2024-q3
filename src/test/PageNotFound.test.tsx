import { describe, test, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Page404 from '../pages/404';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('test PageNotFound', () => {
  test('test render PageNotFound', () => {
    render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>,
    );

    const text = screen.getByText('Back to the main page');
    expect(text).toBeInTheDocument();
  });
});
