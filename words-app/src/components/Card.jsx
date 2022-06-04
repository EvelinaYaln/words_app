import {useState} from 'react';
//import words from '../words-json/words.json';
function Card(props) {
    const [pressed, setPressed]= useState(false);
   
    const handleChange =()=> {
      setPressed(!pressed);
      props.handleClickCheck();
    }
    
    const hidden = () => {
      setPressed(false);
    }

    return (
      <div className="card-container">
        <div className="card-container__card card">
          <div className="card__english">{props.english}</div>
          <div className="card__transcription">{props.transcription}</div>
          {pressed ? <div className="card__russian" onClick={handleChange}>{props.russian}</div> : <button className="card__button-show" onClick={handleChange}>Показать перевод</button> }
        </div>
        <button className="card-container__backward" /*onClick={()=>handleClick('left')}*/onClick={()=>{props.handleClickLeft();hidden();}}><i className="fa-solid fa-angle-left"></i></button>
        <button className="card-container__forward" /*onClick={()=>handleClick('right')}*/onClick={()=>{props.handleClickRight();hidden();}}><i className="fa-solid fa-angle-right"></i></button>
      </div>
    );
  }
  
  export default Card;