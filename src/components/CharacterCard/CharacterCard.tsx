import { Link, useParams } from 'react-router-dom';
import style from './CharacterCard.module.css';
import { swCharacterApi } from '../../store/sw-character-api';

export default function CharacterCard() {
  const { id } = useParams<string>();
  const { data, isFetching } = swCharacterApi.useGetCharacterByIdQuery(id);
  const character = data;

  return (
    <>
      {isFetching && <div className={style.loading_card}>Loading...</div>}
      {!isFetching && character && (
        <div className={style.character_card}>
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
