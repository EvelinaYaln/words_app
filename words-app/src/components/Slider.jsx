import {useState} from 'react';
import Card from './Card';
//import words from '../words-json/words.json';

 const words =
  [{
      "english":"carrot","transcription":"[ ˈkærət ]","russian":"морковь","tags":"овощи","index":"0", "id":"1"
  },{
      "english":"buttefly","transcription":"[ ˈbʌtəflaɪ ]","russian":"бабочка","index":"1", "id":"12"
  },{
      "english":"street","transcription":"[ stri:t ]","russian":"улица","tags":"овощи","index":"2", "id":"123"
  },{
      "english":"car","transcription":"[ kɑ: ]","russian":"автомобиль","tags":"","index":"3", "id":"1234"
      },{
      "english":"arm","transcription":"[ ɑ:m ]","russian":"рука","tags":"", "index":"4", "id":"12345"
  },{
      "english":"air","transcription":"[  eər ]","russian":"воздух","tags":"", "index":"5", "id":"123456"
  },{
      "english":"fox","transcription":"[ fɒks ]","russian":"лиса","tags":"", "index":"6", "id":"1234567"
  },{
      "english":"rabbit","transcription":"[ ˈræbɪt ]","russian":"кролик","tags":"", "index":"7", "id":"12345678"
  },{
      "english":"owl","transcription":"[ aʊl ]","russian":"сова","tags":"птицы", "index":"8", "id":"56484"
  },{
      "english":"mouse","transcription":"[ maʊs]","russian":"мышь","tags":"животные", "index":"9", "id":"92547"
  },{
      "english":"tea","transcription":"[ tiː ]","russian":"чай","tags":"напитки", "index":"10","id":"9414"
  },{
      "english":"goose","transcription":"[ ɡuːs ]","russian":"гусь","tags":"птицы", "index":"11", "id":"2697"
  },{
      "english":"flower","transcription":"[ ˈflaʊər ]","russian":"цветок","tags":"растения", "index":"12", "id":"3259"
   },{
      "english":"bird","transcription":"[ be:d ]","russian":"птица","tags":"птиц", "index":"13", "id":"65945"
  },{
      "english":"cat","transcription":"[ kæt ]","russian":"кот","tags":"", "index":"14", "id":"9642548"
  }
]
function Slider({choosenCard = 0}) {
  
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

    return (
    <div className="container">
        <Card  index={index} handleClickLeft={handleClickLeft} handleClickRight={handleClickRight} handleClickCheck={handleClickCheck} english={words[index].english} russian={words[index].russian}  transcription={words[index].transcription} /> 
        <div className="container__learned">{`Всего выучено новых слов: ${learned.length}/${words.length}`}</div>
    </div>
        
    );
  }
  
export default Slider;