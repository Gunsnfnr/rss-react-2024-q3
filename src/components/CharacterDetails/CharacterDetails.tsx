import style from './CharacterDetails.module.css';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/themeContext';
import useLoading from '../../hooks/useLoading';
import { useRouter } from 'next/router';
import { Character } from '../Main/Main';

const CharacterDetails = ({ characterData }: { characterData: Character | null }) => {
  const { theme } = useContext(ThemeContext);
  const [isLoading] = useLoading();
  const router = useRouter();
  const [isUnmounting, setIsUnmounting] = useState(false);

  useEffect(() => {
    return () => {
      setIsUnmounting(false);
    };
  }, [isUnmounting]);

  const handleToMainClick = () => {
    setIsUnmounting(true);
    if (typeof router.query.search === 'string' && typeof router.query.page === 'string')
      router.push(`/?search=${router.query.search}&page=${router.query.page}`).catch(() => {});
  };

  return (
    <>
      {isLoading && router.query.id && !isUnmounting && (
        <div className={theme === 'light' ? style.loading_card_light : style.loading_card}>Loading...</div>
      )}
      {!isLoading && characterData && (
        <>
          <div className={theme === 'light' ? style.character_card_light : style.character_card}>
            <div>
              <div className={style.name}>{characterData.name}</div>
              <div>
                <div>Height: {characterData.height} cm</div>
                <div>Mass: {characterData.mass} kg</div>
                <div>Birth year: {characterData.birth_year}</div>
                <div>Eye color: {characterData.eye_color}</div>
                <div>Skin color: {characterData.skin_color}</div>
              </div>
              <button className={style.close} onClick={handleToMainClick}>
                Close card
              </button>
            </div>
          </div>
          <div className={style.character_card_backdrop} onClick={handleToMainClick} aria-label="Close"></div>
        </>
      )}
    </>
  );
};

export default CharacterDetails;
