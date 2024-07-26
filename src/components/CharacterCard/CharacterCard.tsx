import { Link } from 'react-router-dom';
import { Character } from '../Main/Main';
import { useContext, useEffect, useState } from 'react';
import style from './CharacterCard.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, removeCard } from '../../store/cardsSlice';
import { RootState } from '../../store';
import { ThemeContext } from '../../context/themeContext';

interface Props {
  character: Character;
}

export default function CharacterCard(props: Props) {
  const url = props.character.url;
  const idOfCharacter = url.split('people/')[1].slice(0, -1);
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const selectedCards = useSelector((state: RootState) => state.charactersCards.selectedCards);

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

  return (
    <Link to={`card/${idOfCharacter}`} className={style.link}>
      <div className={theme === 'light' ? style.star_wars_character_light : style.star_wars_character}>
        <input
          className={style.checkbox}
          type="checkbox"
          checked={isChecked}
          onClick={(event) => {
            event.stopPropagation();
          }}
          onChange={handleCheckboxChange}
        />
        <div className={style.name}>{props.character.name}</div>
      </div>
    </Link>
  );
}
