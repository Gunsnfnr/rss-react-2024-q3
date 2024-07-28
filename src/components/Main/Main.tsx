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
  previous: string | null;
  next: string | null;
}

const Main = () => {
  const [searchResults, setSearchResults] = useState<Character[] | undefined>([]);
  const [storedSearchedQuery, setStoredSearchedQuery] = useLocalStorage('');
  const [searchInputQuery, setSearchInputQuery] = useState(storedSearchedQuery);
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isFetching } = swCharactersApi.useGetCharactersQuery({
    request: storedSearchedQuery,
    page: pageNumber,
  });
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (data) setSearchResults(data.results);
  }, [data, theme]);

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputQuery(ev.target.value);
  };

  const handleSearchClick: () => void = () => {
    setPageNumber(1);
    navigate('/');
    setStoredSearchedQuery(searchInputQuery);
    if (data) setSearchResults(data.results);
  };

  const handleBtn = (page: number) => {
    setPageNumber(page);
    localStorage.setItem('gunsnfnr.swQuery', '');
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
        {isFetching && <div className={style.loading}>Loading...</div>}
        {!isFetching && searchResults && (
          <>
            <Characters searchResults={searchResults} searchQuery={storedSearchedQuery} />
            {searchResults.length > 0 && data && (
              <Pagination handleBtn={handleBtn} page={pageNumber} nextPage={data.next} />
            )}
          </>
        )}
        <SelectedElements />
      </section>
    </main>
  );
};

export default Main;
