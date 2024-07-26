import React, { useContext, useEffect, useState } from 'react';
import Characters from '../Characters/Characters';
import style from './Main.module.css';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import Pagination from '../Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import { swCharactersApi } from '../../store/apiSlice';
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
  results: Character[];
}

const Main = () => {
  const [searchResults, setSearchResults] = useState<Character[] | undefined>([]);
  const [storedSearchedQuery, setStoredSearchedQuery] = useLocalStorage('');
  const [searchInputQuery, setSearchInputQuery] = useState(storedSearchedQuery);
  const navigate = useNavigate();
  const { data, isFetching } = swCharactersApi.useGetCharactersQuery(storedSearchedQuery);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (data) setSearchResults(data.results);
  }, [data, theme]);

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputQuery(ev.target.value);
  };
  const handleSearchClick: () => void = () => {
    navigate('/');
    setStoredSearchedQuery(searchInputQuery);
    if (data) setSearchResults(data.results);
  };
  const toStart = (ev: React.MouseEvent<HTMLElement>) => {
    if (ev.currentTarget instanceof HTMLElement && ev.target instanceof HTMLElement) {
      if (ev.target === ev.currentTarget) {
        navigate('/');
        return;
      }
    }
    return;
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
      <section className={style.results} onClick={toStart}>
        {isFetching && <div className={style.loading}>Loading...</div>}
        {!isFetching && searchResults && (
          <>
            <Characters searchResults={searchResults} searchQuery={storedSearchedQuery} />
            {searchResults.length > 0 && <Pagination />}
            <SelectedElements />
          </>
        )}
      </section>
    </main>
  );
};

export default Main;
