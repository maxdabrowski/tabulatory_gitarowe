import React from "react";
import "./Song.css";

const Song = props =>{

    const tabTypes = props.song.tabTypes.map(tabType => {
        if(tabType === "TEXT_GUITAR_TAB" ){
            tabType = "GUITAR"
        }else if(tabType === "TEXT_BASS_TAB") {
            tabType = "BASS"
        }
        return <li key={tabType} value={tabType}>- {tabType.toLowerCase()}</li>
    });
      
    const href=`http://www.songsterr.com/a/wa/song?id=${props.song.id}`;    
    return (
        <div className="song">
            <span className="songTitle">{props.song.artist.name} - {props.song.title} </span> 
            <br/>
            <span className="TabulatorLabel">dostępne tabulatury:
            <ul className="tabulatorList">
                {tabTypes}
            </ul>
            </span>
            <a 
            href={href}
            target="_blank"
            rel ="noopener noreferrer">
                przejdz do tabulatorów
            </a>
            <hr></hr>
        </div>
    );

};

export default Song;

