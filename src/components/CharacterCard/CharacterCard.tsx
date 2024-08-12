import { Character } from '../Main/Main';
import { useContext, useEffect, useState } from 'react';
import style from './CharacterCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, removeCard } from '../../store/cardsSlice';
import { RootState } from '../../store';
import { ThemeContext } from '../../context/themeContext';
import { useRouter } from 'next/navigation';

interface Props {
  character: Character;
}

const CharacterCard = (props: Props) => {
  const url = props.character.url;
  const id = url.split('people/')[1].slice(0, -1);
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const selectedCards = useSelector((state: RootState) => state.charactersCards.selectedCards);
  const router = useRouter();

  useEffect(() => {
    const isInSelected = selectedCards.some((card) => {
      return card.name === props.character.name;
    });
    if (isInSelected) {
      setIsChecked(true);
    } else setIsChecked(false);
  }, [selectedCards, props.character.name]);

  const { theme } = useContext(ThemeContext);

  const handleCheckboxChange = (ev: React.ChangeEvent) => {
    ev.stopPropagation();
    setIsChecked(!isChecked);
    if (!isChecked) {
      dispatch(addCard(props.character));
    } else {
      dispatch(removeCard(props.character));
    }
  };

  const handleCharacterCardClick = () => {
    if (typeof window === 'undefined') return null;
    const params = new URL(window.location.href).searchParams;
    const search = params.get('search');
    const page = params.get('page');
    if (typeof search === 'string' && typeof page === 'string') router.push(`/?search=${search}&page=${page}&id=${id}`);
  };

  return (
    <div
      className={theme === 'light' ? style.star_wars_character_light : style.star_wars_character}
      onClick={handleCharacterCardClick}
    >
      <input
        className={style.checkbox}
        type="checkbox"
        checked={isChecked}
        onClick={(event) => {
          event.stopPropagation();
        }}
        onChange={handleCheckboxChange}
        title="Click to choose"
      />
      <div className={style.name}>{props.character.name}</div>
    </div>
  );
};

export default CharacterCard;
