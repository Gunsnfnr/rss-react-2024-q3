import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const ChangeThemeButton = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={changeTheme} title="Click to change">
        Theme: {theme}
      </button>
    </div>
  );
};

export default ChangeThemeButton;
