import { Character } from '../components/Main/Main';

export interface SearchParams {
  search: string;
  page: string;
  id?: string;
}

export const fetchCharacterDetails = async (searchParams: SearchParams) => {
  console.log('searchParams: ', searchParams.id);

  if (!searchParams.id) return null;
  const characterDetails = await fetch(`https://swapi.dev/api/people/${searchParams.id}`)
    .then((res) => {
      return res.json();
    })

    .then((data: Character) => {
      return data;
    });

  return characterDetails;
};
