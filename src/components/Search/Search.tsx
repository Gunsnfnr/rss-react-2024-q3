import { useEffect, useState } from "react";
import Results from "../Results/Results";
import EmptyResult from "../EmptyResult/EmptyResult";
import "./Search.css";
import ErrorButton from "../ErrorButton/ErrorButton";
import sendQuery from "../../services/send-query";

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

  const [userInput, setUserInput] = useState(
    localStorage.getItem("gunsnfnr.swQuery"),
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInitialResult = async () => {
      const initialResult = await sendQuery(userInput);
      setSearchResults(initialResult);
    };
    getInitialResult().catch(() => {});
    setLoading(false);
  }, [userInput]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleClick: () => Promise<void> = async () => {
    setLoading(true);
    setUserInput(userInput.trim());
    localStorage.setItem("gunsnfnr.swQuery", userInput.trim());
    setSearchResults(await sendQuery(userInput.trim()));
    setLoading(false);
  };

  return (
    <>
      <div className="search">
        <input
          className="input-field"
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
      <section className="results">
        {loading && <div className="loading">Loading...</div>}
        {!loading &&
          Array.isArray(searchResults) &&
          (searchResults.length > 0 ? (
            <Results searchResults={searchResults} />
          ) : (
            <EmptyResult searchQuery={userInput} />
          ))}
      </section>
    </>
  );
};

export default Search;
