import {useState} from 'react';
import Card from './Card';
//import words from '../words-json/words.json';

 const words =
  [{
      "english":"carrot","transcription":"[ ˈkærət ]","russian":"морковь","tags":"овощи","index":"0"
  },{
      "english":"buttefly","transcription":"[ ˈbʌtəflaɪ ]","russian":"бабочка","index":"1"
  },{
      "english":"street","transcription":"[ stri:t ]","russian":"улица","tags":"овощи","index":"2"
  },{
      "english":"car","transcription":"[ kɑ: ]","russian":"автомобиль","tags":"","index":"3"
      },{
      "english":"arm","transcription":"[ ɑ:m ]","russian":"рука","tags":"", "index":"4"
  },{
      "english":"air","transcription":"[  eər ]","russian":"воздух","tags":"", "index":"5"
  },{
      "english":"fox","transcription":"[ fɒks ]","russian":"лиса","tags":"", "index":"6"
  },{
      "english":"rabbit","transcription":"[ ˈræbɪt ]","russian":"кролик","tags":"", "index":"7"
  },{
      "id":"11369","english":"owl","transcription":"[ aʊl ]","russian":"сова","tags":"птицы", "index":"8"
  },{
      "english":"mouse","transcription":"[ maʊs]","russian":"мышь","tags":"животные", "index":"9"
  },{
      "english":"tea","transcription":"[ tiː ]","russian":"чай","tags":"напитки", "index":"10"
  },{
      "english":"goose","transcription":"[ ɡuːs ]","russian":"гусь","tags":"птицы", "index":"11"
  },{
      "english":"flower","transcription":"[ ˈflaʊər ]","russian":"цветок","tags":"растения", "index":"12"
   },{
      "english":"bird","transcription":"[ be:d ]","russian":"птица","tags":"птиц", "index":"13"
  },{
      "english":"cat","transcription":"[ kæt ]","russian":"кот","tags":"", "index":"14"
  }
]
function Slider({choosenCard = 0}) {
    const [index, setIndex] = useState(choosenCard);
    

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
    <div>
        <Card  english={words[index].english} russian={words[index].russian}  transcription={words[index].transcription} /> 
        <button className="card-container__backward" /*onClick={()=>handleClick('left')}*/onClick={ handleClickLeft}><i className="fa-solid fa-angle-left"></i></button>
        <button className="card-container__forward" /*onClick={()=>handleClick('right')}*/onClick={ handleClickRight}><i className="fa-solid fa-angle-right"></i></button>
    </div>
        
    );
  }
  
export default Slider;