// import React from "react";
import style from "./Results.module.css";
import { Character } from "../Search/Search";
import { Link } from "react-router-dom";

interface Props {
  searchResults: Character[];
}

const Results = (props: Props) => {
  return (
    <>
      {props.searchResults.map((elem: Character, index: number) => {
        const url = elem.url;
        const idOfCharacter = url.split("people/")[1].slice(0, -1);
        return (
          <Link to={`card/${idOfCharacter}`} key={index}>
            <div className={style.star_wars_character}>
              <div className={style.name}>{elem.name}</div>
            </div>
          </Link>
        );
      })}
    </>
  );
};
export default Results;
