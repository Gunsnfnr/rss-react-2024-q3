import { Character } from '../Main/Main';
import CharacterCard from '../CharacterCard/CharacterCard';
import EmptyResult from '../EmptyResult/EmptyResult';

interface CharacterProps {
  searchResults: Character[];
}

const Characters = (props: CharacterProps) => {
  return props.searchResults.length > 0 ? (
    <>
      {props.searchResults.map((ch: Character) => (
        <CharacterCard character={ch} key={ch.name} />
      ))}
    </>
  ) : (
    <EmptyResult />
  );
};

export default Characters;
