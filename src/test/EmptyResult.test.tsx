import { describe, test, expect, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import EmptyResult from '../components/EmptyResult/EmptyResult';

vi.mock('next/router', () => vi.importActual('next-router-mock'));

describe('test EmptyResult', () => {
  test('test render EmptyResult', () => {
    render(<EmptyResult />);
    const text = screen.getByText("Don't forget, we are looking for the Star Wars characters o_0");

    expect(text).toBeInTheDocument();
  });
});
