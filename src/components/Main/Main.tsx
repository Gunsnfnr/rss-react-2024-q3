'use client';
import React, { ReactNode, Suspense, useContext, useEffect, useState } from 'react';
import Characters from '../Characters/Characters';
import style from './Main.module.css';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import Pagination from '../Pagination/Pagination';
import { useRouter } from 'next/navigation';
import ChangeThemeButton from '../ChangeThemeButton/ChangeThemeButton';
import { ThemeContext } from '../../context/themeContext';
import SelectedElements from '../SelectedElements/SelectedElements';

export interface Character {
  name: string;
  height: number;
  mass: number;
  birth_year: string;
  eye_color: string;
  skin_color: string;
  url: string;
}

export interface CharactersData {
  results: Character[];
  previous: string | null;
  next: string | null;
}

export interface CharactersParams {
  request: string;
  page?: number;
}

interface childrenProps {
  children: ReactNode;
}

const Main = ({ charactersData }: { charactersData: CharactersData }, { children }: childrenProps) => {
  const router = useRouter();
  const [storedSearchedQuery, setStoredSearchedQuery] = useLocalStorage('');

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    router.push(`/?search=${storedSearchedQuery}&page=${pageNumber}`);
  }, [storedSearchedQuery, pageNumber, router]);

  const [searchInputQuery, setSearchInputQuery] = useState(() => {
    if (typeof window === 'undefined') return '';
    return storedSearchedQuery;
  });

  const { theme } = useContext(ThemeContext);
  const isLocalStorageAvailable = typeof window !== 'undefined';

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputQuery(ev.target.value);
  };

  const handleSearchClick: () => void = () => {
    setPageNumber(1);
    if (typeof searchInputQuery === 'string') setStoredSearchedQuery(searchInputQuery);
    router.push(`/?search=${searchInputQuery}&page=${1}`);
  };

  const handleBtn = (page: number) => {
    setPageNumber(page);
    router.push(`/?search=${searchInputQuery}&page=${page}`);
    if (isLocalStorageAvailable) localStorage.setItem('gunsnfnr.swQuery', '');
  };

  return (
    <main className={theme === 'light' ? style.light : style.dark}>
      <section className={style.search}>
        <input className={style.input_field} type="text" value={searchInputQuery} onChange={handleInputChange} />
        <button type="button" onClick={handleSearchClick}>
          Search
        </button>
        <ChangeThemeButton />
      </section>
      <section className={style.results}>
        {charactersData && charactersData.results && (
          <Suspense key={searchInputQuery} fallback={<div className={style.loading}>Loading...</div>}>
            <>
              <Characters searchResults={charactersData.results} />
              {children}
              {charactersData.results.length > 0 && (
                <Pagination handleBtn={handleBtn} page={pageNumber} nextPage={charactersData.next} />
              )}
            </>
          </Suspense>
        )}
        <SelectedElements />
      </section>
    </main>
  );
};

export default Main;
