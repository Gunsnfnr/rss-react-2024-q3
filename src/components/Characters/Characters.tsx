import { Character } from '../Main/Main';
import CharacterCard from '../CharacterCard/CharacterCard';

interface Props {
  searchResults: Character[];
}

const Characters = (props: Props) => {
  return (
    <>
      {props.searchResults.map((elem: Character, index: number) => (
        <CharacterCard character={elem} key={index} />
      ))}
    </>
  );
};
export default Characters;
