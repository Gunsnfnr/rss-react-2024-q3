import { CharactersData } from "../components/Search/Search";

const sendQuery: (
  searchString: string,
) => Promise<Character[] | undefined> = async (searchString) => {
  let fetchedResult: Character[] | undefined;
  await fetch(`https://swapi.dev/api/people/?search=${searchString}`)
    .then((resp: Response) => {
      if (resp.status === 200) return resp.json();
    })
    .then((data: CharactersData) => {
      // setLoading(false);
      if (data.results.length > 0) {
        // setSearchResults(data.results);
        fetchedResult = data.results;
      } else {
        // setSearchResults([]);
        fetchedResult = [];
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return fetchedResult;
};
export default sendQuery;
