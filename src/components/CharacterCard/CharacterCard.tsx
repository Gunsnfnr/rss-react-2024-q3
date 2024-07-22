import { Link } from 'react-router-dom';
import { Character } from '../Main/Main';
import { useState } from 'react';
import style from './CharacterCard.module.css';
import { useDispatch } from 'react-redux';
import { addCard, removeCard } from '../../store/cardsSlice';

interface Props {
  character: Character;
}

export default function CharacterCard(props: Props) {
  const url = props.character.url;
  const idOfCharacter = url.split('people/')[1].slice(0, -1);
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();

  const handleCheckboxChange = (event: React.ChangeEvent) => {
    event.stopPropagation();
    setIsChecked(!isChecked);
    if (!isChecked) {
      dispatch(addCard(props.character));
    } else {
      dispatch(removeCard(props.character));
    }
  };

  return (
    <Link to={`card/${idOfCharacter}`} className={style.link}>
      <div className={style.star_wars_character}>
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
