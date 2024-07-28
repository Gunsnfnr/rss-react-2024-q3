import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import { BrowserRouter } from 'react-router-dom';

describe('test PageNotFound', () => {
  test('test render PageNotFound', () => {
    render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>,
    );

    const text = screen.getByText('Back to the main page');
    expect(text).toBeInTheDocument();
  });
});
