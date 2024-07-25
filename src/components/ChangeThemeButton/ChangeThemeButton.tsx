import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

export default function ChangeThemeButton() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={() => changeTheme()} title="Click to change">
        Theme: {theme}
      </button>
    </div>
  );
}
