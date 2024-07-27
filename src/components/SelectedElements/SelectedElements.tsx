import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import style from './SelectedElements.module.css';
import { removeAllCards } from '../../store/cardsSlice';
import Download from '../Download/Download';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const SelectedElements = () => {
  const numberOfSelectedCards = useSelector((state: RootState) => state.charactersCards.selectedCards.length);
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  const unselectAllHandler = () => {
    dispatch(removeAllCards());
  };

  return (
    numberOfSelectedCards > 0 && (
      <div className={theme === 'dark' ? style.flyout : style.flyout_light}>
        <div className={style.info}>{numberOfSelectedCards} item(-s) are selected</div>
        <div className={style.buttons}>
          <a className={style.button} onClick={unselectAllHandler}>
            Unselect all
          </a>
          <Download />
        </div>
      </div>
    )
  );
};

export default SelectedElements;
