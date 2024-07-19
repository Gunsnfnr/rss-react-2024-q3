import { Link, useParams } from 'react-router-dom';
import style from './CharacterCard.module.css';
import fetchCharacter from '../../services/fetch-character';
import { useEffect, useState } from 'react';
import { Character } from '../Main/Main';

export default function CharacterCard() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState<Character | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);
    const getCharacter = async () => {
      if (id) {
        const newCharacter: Character | undefined = await fetchCharacter(id);
        setCharacter(newCharacter);
      }
    };
    getCharacter().catch(() => {});
    setIsLoading(false);
  }, [id]);

  return (
    <>
      {isLoading && <div className={style.loading_card}>Loading...</div>}
      {!isLoading && character && (
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
