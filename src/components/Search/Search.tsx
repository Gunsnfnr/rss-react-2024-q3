import { useEffect, useState } from "react";
import Results from "../Results/Results";
import EmptyResult from "../EmptyResult/EmptyResult";
import "./Search.css";
import ErrorButton from "../ErrorButton/ErrorButton";

export interface Character {
  name: string;
  height: number;
  mass: number;
  birth_year: string;
  eye_color: string;
  skin_color: string;
}

interface CharactersData {
  results: Character[];
}

export const Search = () => {
  const [searchResults, setSearchResults] = useState<Character[] | null>(null);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lastSearch: string | null = localStorage.getItem("gunsnfnr.swQuery");

    if (lastSearch) {
      sendQuery(lastSearch).catch(() => {});
      setUserInput(lastSearch);
    } else sendQuery("").catch(() => {});
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  const handleClick: () => Promise<void> = async () => {
    setLoading(true);
    setUserInput(userInput.trim());
    localStorage.setItem("gunsnfnr.swQuery", userInput.trim());
    await sendQuery(userInput.trim());
  };

  const sendQuery: (searchString: string) => Promise<void> = async (
    searchString,
  ) => {
    await fetch(`https://swapi.dev/api/people/?search=${searchString}`)
      .then((resp: Response) => {
        if (resp.status === 200) return resp.json();
      })
      .then((data: CharactersData) => {
        setLoading(false);
        if (data.results.length > 0) {
          setSearchResults(data.results);
        } else {
          setSearchResults([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
