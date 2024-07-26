import { Character } from '../Main/Main';
import CharacterCard from '../CharacterCard/CharacterCard';
import EmptyResult from '../EmptyResult/EmptyResult';

interface Props {
  searchResults: Character[];
  searchQuery: string;
}

const Characters = (props: Props) => {
  return props.searchResults.length > 0 ? (
    <>
      {props.searchResults.map((ch: Character) => (
        <CharacterCard character={ch} key={ch.name} />
      ))}
    </>
  ) : (
    <EmptyResult searchQuery={props.searchQuery} />
  );
};
export default Characters;
