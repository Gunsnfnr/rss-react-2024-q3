import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import style from './SelectedElements.module.css';

export default function SelectedElements() {
  const numberOfSelectedCards = useSelector((state: RootState) => state.cards.selectedCards.length);
  return (
    numberOfSelectedCards > 0 && (
      <div className={style.flyout}>
        <div className={style.info}>{numberOfSelectedCards} item(-s) are selected</div>
        <div className={style.buttons}>
          <a className={style.button}>Unselect all</a>
          <a className={style.button}>Download</a>
        </div>
      </div>
    )
  );
}
