import Main, { Character, CharactersData } from '../components/Main/Main';
import { Provider } from 'react-redux';
import { store } from '../store';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import CharacterDetails from '../components/CharacterDetails/CharacterDetails';

export const getServerSideProps = (async (context) => {
  const charactersData = await fetch(
    `https://swapi.dev/api/people/?search=${context.query.search as string}&page=${context.query.page ? (context.query.page as string) : 1}`,
  )
    .then((res) => res.json())
    .then((data: CharactersData) => data);

  let characterData: Character | null = null;
  if (context.query.id)
    characterData = await fetch(`https://swapi.dev/api/people/${context.query.id as string}`)
      .then((res) => res.json())
      .then((data: Character) => data);

  return { props: { charactersData, characterData } };
}) satisfies GetServerSideProps<{ charactersData: CharactersData; characterData: Character | null }>;

export default function Home({
  charactersData,
  characterData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Provider store={store}>
      <Main charactersData={charactersData} />
      <CharacterDetails characterData={characterData} />
    </Provider>
  );
}
