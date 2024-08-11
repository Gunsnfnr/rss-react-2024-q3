import CharacterDetails from '../components/CharacterDetails/CharacterDetails';
import Main from '../components/Main/Main';
import { fetchCharacterDetails } from './fetchCharacterDetails';
import { fetchCharacters, SearchParams } from './fetchCharacters';

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  console.log('searchParams: ', searchParams);

  const fetchedCharacters = await fetchCharacters(searchParams);
  const characterDetails = await fetchCharacterDetails(searchParams);

  return (
    <>
      <Main charactersData={fetchedCharacters} />
      <CharacterDetails characterData={characterDetails} />
    </>
  );
}
