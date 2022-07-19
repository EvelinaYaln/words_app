import {useState, useContext} from 'react';
import Card from './Card';
import { WordsContext } from '../context/context-words';

function Slider({choosenCard = 0}) {
    const {words} = useContext(WordsContext);
    const [index, setIndex] = useState(choosenCard);
    const [learned, setLearned] = useState([]);
   
    const handleClickCheck = (index) => {
      let newLearned = learned.includes(index) 
      ?  [...learned]
      : [...learned, index];
      setLearned(newLearned);
    }
    
    /*const handleClick =(direction)=> {
      let newIndex = index;
      switch (direction) {
        case 'right':
          ++newIndex;
          break;
        case 'left':
          --newIndex;
          break;
        default:
          ++newIndex;
      }
      setIndex(newIndex);
    }*/
    const check = (index) => {
      if (index <0) {
        return words.length-1;
      } else if (index >= words.length) {
        return 0;
      }
      return index;
    }

    const handleClickRight = () =>{
      let newIndex = index;
      ++newIndex;

      newIndex=check(newIndex);
      setIndex(newIndex);
    }

    const handleClickLeft = () =>{
      let newIndex = index;
      --newIndex;
      newIndex=check(newIndex);
      setIndex(newIndex);
    }

    if (!words.length) {
      return
    }

    return (
    <div className="container">
        <Card  index={index} handleClickLeft={handleClickLeft} handleClickRight={handleClickRight} handleClickCheck={handleClickCheck} english={words[index].english} russian={words[index].russian}  transcription={words[index].transcription} /> 
        <div className="container__learned">{`Всего выучено новых слов: ${learned.length}/${words.length}`}</div>
    </div>
        
    );
  }
  
export default Slider;