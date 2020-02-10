import React from "react";
import "./Header.css";

const Header = () => {
    return ( 
        <div className="header">
          <h1>Tabul<span className="spanTitle">App</span>tury gitarowe</h1>
          <p className="subscription">
            Cześć, jeżeli szukasz gitarowych tabulatorów, to dobrze trafiłeś. Jeżeli nie masz przy sobie chwytów gitarowych
            to nie problem, ta aplikacja pomoże Ci zagrać na gitarze w każdym miejscu i o każdej porze. Wpisz w poniżym polu 
            nazwe utworu lub artysty, wybierz jaki rodzaj tabulatury Cie interesuje, kliknij "Wyszukaj" a my pokażemy Ci 
            wszystkie wyniki twojego wyszukiwania. Znajdz interesujący Cię utwór, kliknij "przejdz do tabulatorów" i już 
            możesz zaczynać grać !!
          </p>
        </div>
      );
    };
    
    export default Header;


