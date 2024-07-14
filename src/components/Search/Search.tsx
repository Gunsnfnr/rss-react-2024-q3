import { useEffect, useState } from "react";
import Results from "../Results/Results";
import EmptyResult from "../EmptyResult/EmptyResult";
import style from "./Search.module.css";
import ErrorButton from "../ErrorButton/ErrorButton";
import sendQuery from "../../services/send-query";
import { useLocalStorage } from "../../hooks/use-local-storage";
import { Link } from "react-router-dom";

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
  count: number;
  next: string | null;
}

export const Search = () => {
  const [searchResults, setSearchResults] = useState<Character[] | null>(null);
  const [userRequest, setUserRequest] = useLocalStorage("");
  const [userInput, setUserInput] = useState(userRequest);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInitialResult = async () => {
      const initialResult = await sendQuery(userRequest);
      setSearchResults(initialResult);
    };
    getInitialResult().catch(() => {});
    setLoading(false);
  }, [userRequest]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };
  const handleClick: () => Promise<void> = async () => {
    setLoading(true);
    setUserRequest(userInput);
    setSearchResults(await sendQuery(userInput));
    setLoading(false);
  };

  return (
    <main>
      <section className={style.search}>
        <input
          className={style.input_field}
          type="text"
          value={userInput}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={() => {
            const handler = async () => {
              await handleClick();
            };
            handler().catch(() => {});
          }}
        >
          Search
        </button>
        <ErrorButton />
      </section>
      <Link to="/main">
        <section className={style.results}>
          {loading && <div className={style.loading}>Loading...</div>}
          {!loading &&
            Array.isArray(searchResults) &&
            (searchResults.length > 0 ? (
              <Results searchResults={searchResults} />
            ) : (
              <EmptyResult searchQuery={userRequest} />
            ))}
        </section>
      </Link>
    </main>
  );
};

export default Search;
