import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import style from './SelectedElements.module.css';
import { removeAllCards } from '../../store/cardsSlice';
import Download from '../Download/Download';

export default function SelectedElements() {
  const numberOfSelectedCards = useSelector((state: RootState) => state.cards.selectedCards.length);

  const dispatch = useDispatch();

  const unselectAllHandler = () => {
    dispatch(removeAllCards());
  };

  return (
    numberOfSelectedCards > 0 && (
      <div className={style.flyout}>
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
}
