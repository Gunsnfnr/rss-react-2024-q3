'use client';
import style from './CharacterDetails.module.css';
import { Suspense, useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { useRouter } from 'next/navigation';
import { Character } from '../Main/Main';

const CharacterDetails = ({ characterData }: { characterData: Character | null }) => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();

  if (typeof window === 'undefined') return null;
  const params = new URL(window.location.href).searchParams;
  const search = params.get('search');
  const page = params.get('page');

  const handleToMainClick = () => {
    if (typeof search === 'string' && typeof page === 'string') router.push(`/?search=${search}&page=${page}`);
  };

  return (
    <>
      {characterData && (
        <Suspense fallback={<div className={style.loading}>Loading...</div>}>
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
        </Suspense>
      )}
    </>
  );
};

export default CharacterDetails;
