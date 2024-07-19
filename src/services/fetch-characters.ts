import { CharactersData } from '../components/Main/Main';

const fetchCharacters: (searchString: string, page: number) => Promise<CharactersData | undefined> = async (
  searchString,
  page = 1,
) => {
  let fetchedResult: CharactersData | undefined;
  await fetch(`https://swapi.dev/api/people/?search=${searchString}&page=${page}`)
    .then((resp: Response) => {
      if (resp.status === 200) return resp.json();
    })
    .then((data: CharactersData) => {
      if (data.results && data.results.length > 0) {
        fetchedResult = data;
      } else {
        fetchedResult = [] as CharactersData;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return fetchedResult;
};
export default fetchCharacters;
