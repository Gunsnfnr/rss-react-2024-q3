import { Link, useParams } from "react-router-dom";
import style from "./CharacterCard.module.css";
import callForACharacter from "../../services/character-call";
import { useEffect, useState } from "react";
import { Character } from "../Search/Search";

export default function CharacterCard() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(undefined);

  useEffect(() => {
    setLoading(true);
    const getCharacter = async () => {
      const newCharacter: Character | undefined = await callForACharacter(id);
      setCharacter(newCharacter);
    };
    getCharacter().catch(() => {});
    setLoading(false);
  }, [id, loading, character]);

  return (
    <>
      {loading && <div className={style.loading_card}>Loading...</div>}
      {!loading && character && (
        <div className={style.character_card}>
          <div>
            <div className={style.name}>{character.name}</div>
            <div>
              <div>Height: {character.height} cm</div>
              <div>Mass: {character.mass} kg</div>
              <div>Birth year: {character.birth_year}</div>
              <div>Eye color: {character.eye_color}</div>
              <div>Skin color: {character.skin_color}</div>
            </div>
            <Link to="/main">
              <button className={style.close}>Close card</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
