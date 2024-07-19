import React, { useEffect, useState } from 'react';
import Characters from '../Characters/Characters';
import EmptyResult from '../EmptyResult/EmptyResult';
import style from './Main.module.css';
import ErrorButton from '../ErrorButton/ErrorButton';
import fetchCharacters from '../../services/fetch-characters';
import { useLocalStorage } from '../../hooks/use-local-storage';
import Pagination from '../Pagination/Pagination';
import { useNavigate } from 'react-router-dom';

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
  results?: Character[];
}

export const Main = () => {
  const [searchResults, setSearchResults] = useState<Character[] | null | undefined>(null);
  const [storedSearchedValue, setStoredSearchedValue] = useLocalStorage('');
  const [searchInputValue, setSearchInputValue] = useState(storedSearchedValue);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getInitialResult = async () => {
      const initialResult = await fetchCharacters(storedSearchedValue, 1);
      setSearchResults(initialResult?.results);
    };
    getInitialResult().catch(() => {});
    setIsLoading(false);
  }, [storedSearchedValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
  };
  const handleSearchClick: () => Promise<void> = async () => {
    setIsLoading(true);
    setStoredSearchedValue(searchInputValue);
    setSearchResults((await fetchCharacters(searchInputValue, 1))?.results);
    setIsLoading(false);
  };
  const toStart = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget instanceof HTMLElement && event.target instanceof HTMLElement) {
      if (event.target === event.currentTarget) {
        navigate('/');
        return;
      }
    }
    return;
  };

  return (
    <main>
      <section className={style.search}>
        <input className={style.input_field} type="text" value={searchInputValue} onChange={handleInputChange} />
        <button
          type="button"
          onClick={() => {
            const handler = async () => {
              await handleSearchClick();
            };
            handler().catch(() => {});
          }}
        >
          Search
        </button>
        <ErrorButton />
      </section>
      <section className={style.results} onClick={toStart}>
        {isLoading && <div className={style.loading}>Loading...</div>}
        {!isLoading &&
          (searchResults && searchResults.length > 0 ? (
            <>
              <Characters searchResults={searchResults} />
              <Pagination />
            </>
          ) : (
            <EmptyResult searchQuery={storedSearchedValue} />
          ))}
      </section>
    </main>
  );
};

export default Main;
