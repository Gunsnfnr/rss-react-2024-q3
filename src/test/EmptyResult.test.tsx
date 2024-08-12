'use client';
import { describe, test, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import EmptyResult from '../components/EmptyResult/EmptyResult';
import { MemoryRouter } from 'react-router-dom';

vi.mock('next/navigation', () => {
  return {
    useSearchParams: vi.fn(() => ({
      get: vi.fn(),
    })),
  };
});

describe('test EmptyResult', () => {
  test('test render EmptyResult', () => {
    render(
      <MemoryRouter>
        <EmptyResult />
      </MemoryRouter>,
    );
    const text = screen.getByText("Don't forget, we are looking for the Star Wars characters o_0");

    expect(text).toBeInTheDocument();
  });
});
