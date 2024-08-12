import { CharactersData } from '../components/Main/Main';

export interface SearchParams {
  search: string;
  page: string;
  id?: string;
}

export const fetchCharacters = async (searchParams: SearchParams) => {
  console.log('searchParams: ', searchParams.search);

  const charactersData = await fetch(
    `https://swapi.dev/api/people/?search=${searchParams.search ? searchParams.search : ''}&page=${searchParams.page ? searchParams.page : 1}`,
  )
    .then((res) => {
      return res.json();
    })

    .then((data: CharactersData) => {
      return data;
    });

  return charactersData;
};
