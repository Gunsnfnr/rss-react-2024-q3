import { describe, test, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from '../app/not-found';

vi.mock('next/navigation', () => vi.importActual('next-router-mock'));

describe('test PageNotFound', () => {
  test('test render PageNotFound', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );

    const text = screen.getByText('Back to the main page');
    expect(text).toBeInTheDocument();
  });
});
