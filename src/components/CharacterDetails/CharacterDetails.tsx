import { Link, useParams } from 'react-router-dom';
import style from './CharacterDetails.module.css';
import { swCharacterApi } from '../../store/sw-character-api';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

export default function CharacterDetails() {
  const { id } = useParams<string>();
  const { data, isFetching } = swCharacterApi.useGetCharacterByIdQuery(id);
  const character = data;

  const { theme } = useContext(ThemeContext);

  return (
    <>
      {isFetching && (
        <div className={theme === 'light' ? style.loading_card_light : style.loading_card}>Loading...</div>
      )}
      {!isFetching && character && (
        <div className={theme === 'light' ? style.character_card_light : style.character_card}>
          <div>
            <div className={style.name}>{character.name}</div>
            <div>
              <div>Height: {character.height} cm</div>
              <div>Mass: {character.mass} kg</div>
              <div>Birth year: {character.birth_year}</div>
              <div>Eye color: {character.eye_color}</div>
              <div>Skin color: {character.skin_color}</div>
            </div>
            <Link to="/">
              <button className={style.close}>Close card</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
