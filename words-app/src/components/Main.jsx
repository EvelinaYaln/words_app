import Heading from "./Heading-table";
import Table from "./Table";
import Card from "./Card";
import Slider from "./Slider";


const vocab = [{
  "english":"carrot","transcription":"[ ˈkærət ]","russian":"морковь","tags":"овощи","index":"0",
},{
  "english":"buttefly","transcription":"[ ˈbʌtəflaɪ ]","russian":"бабочка","index":"1",
},{
  "english":"street","transcription":"[ stri:t ]","russian":"улица","tags":"овощи","index":"2",
},{
  "english":"car","transcription":"[ kɑ: ]","russian":"автомобиль","tags":"","index":"3",
},{
  "english":"arm","transcription":"[ ɑ:m ]","russian":"рука","tags":"", "index":"4",
},{
  "english":"air","transcription":"[  eər ]","russian":"воздух","tags":"", "index":"5",
},{
  "english":"fox","transcription":"[ fɒks ]","russian":"лиса","tags":"", "index":"6",
},{
  "english":"rabbit","transcription":"[ ˈræbɪt ]","russian":"кролик","tags":"", "index":"7",
},{
  "id":"11369","english":"owl","transcription":"[ aʊl ]","russian":"сова","tags":"птицы", "index":"8",
},{
  "english":"mouse","transcription":"[ maʊs]","russian":"мышь","tags":"животные", "index":"9",
},{
  "english":"tea","transcription":"[ tiː ]","russian":"чай","tags":"напитки", "index":"10",
},{
  "english":"goose","transcription":"[ ɡuːs ]","russian":"гусь","tags":"птицы", "index":"11",
},{
  "english":"flower","transcription":"[ ˈflaʊər ]","russian":"цветок","tags":"растения", "index":"12",
},{
  "english":"bird","transcription":"[ be:d ]","russian":"птица","tags":"птиц", "index":"13",
},{
  "english":"cat","transcription":"[ kæt ]","russian":"кот","tags":"", "index":"14",
}
]
function Main() {
    return (
      <div className="main" id="main">
        
        <Slider choosenCard={3}/>
        <Heading/>
         {vocab.map((v)=>
        <Table english={v.english} russian={v.russian}  transcription={v.transcription} />
      )}
         
      </div>
        
    );
  }
  
  export default Main;