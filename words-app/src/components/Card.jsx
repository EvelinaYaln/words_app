import {useState} from 'react';
function Card(props) {
    const [pressed, setPressed]= useState(false);
    const handleChange =()=> {
      setPressed(!pressed);
    }
    return (
      <div className="card-container">
        <div className="card-container__card card">
          <div className="card__english">{props.english}</div>
          <div className="card__transcription">{props.transcription}</div>
          {pressed ? <div className="card__russian" onClick={handleChange}>{props.russian}</div> : <button className="card__button-show" onClick={handleChange}>Показать перевод</button> }
        </div>
      </div>
    );
  }
  
  export default Card;