import { CharactersData } from "../components/Search/Search";

const sendQuery: (
  searchString: string,
  page: string,
) => Promise<CharactersData | undefined> = async (searchString, page = "1") => {
  let fetchedResult: CharactersData | undefined;
  await fetch(
    `https://swapi.dev/api/people/?search=${searchString}&page=${page}`,
  )
    .then((resp: Response) => {
      if (resp.status === 200) return resp.json();
    })
    .then((data: CharactersData) => {
      if (data.results.length > 0) {
        fetchedResult = data;
      } else {
        fetchedResult = [];
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return fetchedResult;
};
export default sendQuery;
