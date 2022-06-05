import {useState} from 'react';
import Card from './Card';
//import words from '../words-json/words.json';

 const words =
  [{
      "english":"carrot","transcription":"[ ˈkærət ]","russian":"морковь","tags":"овощи","index":"0", "wasShown":"false"
  },{
      "english":"buttefly","transcription":"[ ˈbʌtəflaɪ ]","russian":"бабочка","index":"1", "wasShown":"false"
  },{
      "english":"street","transcription":"[ stri:t ]","russian":"улица","tags":"овощи","index":"2", "wasShown":"false"
  },{
      "english":"car","transcription":"[ kɑ: ]","russian":"автомобиль","tags":"","index":"3", "wasShown":"false"
      },{
      "english":"arm","transcription":"[ ɑ:m ]","russian":"рука","tags":"", "index":"4", "wasShown":"false"
  },{
      "english":"air","transcription":"[  eər ]","russian":"воздух","tags":"", "index":"5", "wasShown":"false"
  },{
      "english":"fox","transcription":"[ fɒks ]","russian":"лиса","tags":"", "index":"6", "wasShown":"false"
  },{
      "english":"rabbit","transcription":"[ ˈræbɪt ]","russian":"кролик","tags":"", "index":"7", "wasShown":"false"
  },{
      "id":"11369","english":"owl","transcription":"[ aʊl ]","russian":"сова","tags":"птицы", "index":"8", "wasShown":"false"
  },{
      "english":"mouse","transcription":"[ maʊs]","russian":"мышь","tags":"животные", "index":"9", "wasShown":"false"
  },{
      "english":"tea","transcription":"[ tiː ]","russian":"чай","tags":"напитки", "index":"10","wasShown":"false"
  },{
      "english":"goose","transcription":"[ ɡuːs ]","russian":"гусь","tags":"птицы", "index":"11", "wasShown":"false"
  },{
      "english":"flower","transcription":"[ ˈflaʊər ]","russian":"цветок","tags":"растения", "index":"12", "wasShown":"false"
   },{
      "english":"bird","transcription":"[ be:d ]","russian":"птица","tags":"птиц", "index":"13", "wasShown":"false"
  },{
      "english":"cat","transcription":"[ kæt ]","russian":"кот","tags":"", "index":"14", "wasShown":"false"
  }
]
function Slider({choosenCard = 0}) {
    
    const [wasShown, setWasShown] = useState(false);
    const [index, setIndex] = useState(choosenCard);
    //const [learned, setLearned] = useState([]);
    const [learned, setLearned] = useState([]);
    /*const handleClickCheck = (index) => {
      const newLearned = learned.includes(index) 
      ? learned.filter((i) => i !== index)
      : [...learned, index];
    setLearned(newLearned);
    }*/
    const handleClickCheck = (index) => {
      let newLearned = learned.includes(index) 
      ?  [...learned]
      : [...learned, index];
      setLearned(newLearned);
    }
    const handleShow = () => {
      setWasShown(!wasShown);
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

    return (
    <div className="container">
        <Card  handleShow={handleShow} handleClickLeft={handleClickLeft} handleClickRight={handleClickRight} handleClickCheck={handleClickCheck} english={words[index].english} russian={words[index].russian}  transcription={words[index].transcription} /> 
        <div className="container__learned">{`Всего выучено новых слов: ${learned.length}/${words.length}`}</div>
    </div>
        
    );
  }
  
export default Slider;