// import React from "react";
import style from "./Results.module.css";
import { Character } from "../Search/Search";

interface Props {
  searchResults: Character[];
}

const Results = (props: Props) => {
  return (
    <>
      {props.searchResults.map((elem: Character, index: number) => {
        return (
          <div className={style.star_wars_character} key={index}>
            <div className={style.name}>{elem.name}</div>
            <div>
              <div>Height: {elem.height} cm</div>
              <div>Mass: {elem.mass} kg</div>
              <div>Birth year: {elem.birth_year}</div>
              <div>Eye color: {elem.eye_color}</div>
              <div>Skin color: {elem.skin_color}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Results;
