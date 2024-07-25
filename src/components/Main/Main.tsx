import React, { useContext, useEffect, useState } from 'react';
import Characters from '../Characters/Characters';
import EmptyResult from '../EmptyResult/EmptyResult';
import style from './Main.module.css';
import { useLocalStorage } from '../../hooks/use-local-storage';
import Pagination from '../Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import { swCharactersApi } from '../../store/sw-characters-api';
import SelectedElements from '../SelectedElements/SelectedElements';
import ChangeThemeButton from '../ChangeThemeButton/ChangeThemeButton';
import { ThemeContext } from '../../context/themeContext';

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

const Main = () => {
  const [searchResults, setSearchResults] = useState<Character[] | null | undefined>(null);
  const [storedSearchedValue, setStoredSearchedValue] = useLocalStorage('');
  const [searchInputValue, setSearchInputValue] = useState(storedSearchedValue);
  const navigate = useNavigate();
  const { data, isFetching } = swCharactersApi.useSearchCharactersQuery(storedSearchedValue);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (data) setSearchResults(data.results);
  }, [data, theme]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value);
  };
  const handleSearchClick: () => void = () => {
    navigate('/');
    setStoredSearchedValue(searchInputValue);
    if (data) setSearchResults(data.results);
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
    <main className={theme === 'light' ? style.light : style.dark}>
      <section className={style.search}>
        <input className={style.input_field} type="text" value={searchInputValue} onChange={handleInputChange} />
        <button
          type="button"
          onClick={() => {
            handleSearchClick();
          }}
        >
          Search
        </button>
        <ChangeThemeButton />
      </section>
      <section className={style.results} onClick={toStart}>
        {isFetching && <div className={style.loading}>Loading...</div>}
        {!isFetching &&
          (searchResults && searchResults.length > 0 ? (
            <>
              <Characters searchResults={searchResults} />
              <Pagination />
              <SelectedElements />
            </>
          ) : (
            <EmptyResult searchQuery={storedSearchedValue} />
          ))}
      </section>
    </main>
  );
};

export default Main;
