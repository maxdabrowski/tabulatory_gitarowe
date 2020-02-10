
import React from "react";
import "./Form.css";

const Form = props => {
  return (
    <form className="form" onSubmit={props.submit}>   
      <input className='inputSelectForm input'
        type="text"
        value={props.valueInput}
        placeholder="wpisz tytuł lub wykonawcę" 
        onChange={props.changeInput}    
      />
      <select className='inputSelectForm select'
        value={props.valueSelect}
        onChange={props.changeSelect}
      >
        <option  value="">wszystkie</option>
        <option value="CHORDS">chords</option>s
        <option value="TEXT_BASS_TAB">bass</option>
        <option value="TEXT_GUITAR_TAB">guitar</option>
        <option value="PLAYER">player</option>
      </select>
      <button>Wyszukaj</button>
    </form>
  );
};

export default Form;
