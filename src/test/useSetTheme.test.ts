import { renderHook } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import useSetTheme from '../context/useSetTheme';

describe('test useSetTheme', () => {
  test('should return a default value', () => {
    const { result } = renderHook(() => useSetTheme());

    expect(result.current.theme).toBe('dark');
  });

  test('should return "light"', () => {
    localStorage.setItem('gunsnfnr.sw-theme', 'light');
    const { result } = renderHook(() => useSetTheme());

    expect(result.current.theme).toBe('light');
  });
});
