import { useEffect, useState } from "react";
import Results from "../Results/Results";
import EmptyResult from "../EmptyResult/EmptyResult";
import style from "./Search.module.css";
import ErrorButton from "../ErrorButton/ErrorButton";
import sendQuery from "../../services/send-query";
import { useLocalStorage } from "../../hooks/use-local-storage";

export interface Character {
  name: string;
  height: number;
  mass: number;
  birth_year: string;
  eye_color: string;
  skin_color: string;
}

export interface CharactersData {
  results: Character[];
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
    <>
      <div className={style.search}>
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
      </div>
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
    </>
  );
};

export default Search;
