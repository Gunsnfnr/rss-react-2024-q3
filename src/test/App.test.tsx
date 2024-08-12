import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/react';

import ChangeThemeButton from '../components/ChangeThemeButton/ChangeThemeButton';

describe('test ChangeThemeButton', () => {
  test('test render', () => {
    render(<ChangeThemeButton />);

    const changeThemeButton = screen.getByTitle('Click to change');
    expect(changeThemeButton).toBeInTheDocument();
  });
});
