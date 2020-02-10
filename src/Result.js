import React from "react";
import Song from "./Song";
import "./Result.css";

const Result = props => {

  const list = props.tabSongs.map(song => (
    <li key={song.id}>
      <Song song={song} />
    </li>
  ));
    return (
      <div className="result"> 
        {props.tabSongs.length===0 && props.onload===1 ? <p className="noResult">brak wyników wyszukiwania</p>:<ul className="resultList">{list}</ul>} 
      </div>
      );
    };
    export default Result; 
