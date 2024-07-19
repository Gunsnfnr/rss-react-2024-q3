import { Character } from '../components/Main/Main';

const fetchCharacter: (idOfCharacter: string) => Promise<Character | undefined> = async (idOfCharacter) => {
  let character: Character | undefined;
  await fetch(`https://swapi.dev/api/people/${idOfCharacter}/`)
    .then((resp: Response) => {
      if (resp.status === 200) return resp.json();
    })
    .then((data: Character) => {
      character = data;
    })
    .catch((error) => {
      console.log(error);
    });
  return character;
};
export default fetchCharacter;
