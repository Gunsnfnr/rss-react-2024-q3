import { Link, useNavigate, useParams } from 'react-router-dom';
import style from './CharacterDetails.module.css';
import { swCharactersApi } from '../../store/apiSlice';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const CharacterDetails = () => {
  const { id } = useParams<string>();
  const { data: character, isFetching } = swCharactersApi.useGetCharacterByIdQuery(id);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <>
      {isFetching && (
        <div className={theme === 'light' ? style.loading_card_light : style.loading_card}>Loading...</div>
      )}
      {!isFetching && character && (
        <>
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
          <div className={style.character_card_backdrop} onClick={() => navigate('/')} aria-label="Close"></div>
        </>
      )}
    </>
  );
};

export default CharacterDetails;
