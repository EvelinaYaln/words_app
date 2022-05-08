import Heading from "./Heading-table";
import Table from "./Table";
import Card from "./Card";


const vocab = [{
  "english":"carrot","transcription":"[ ˈkærət ]","russian":"морковь","tags":"овощи", 
},{
  "english":"buttefly","transcription":"[ ˈbʌtəflaɪ ]","russian":"бабочка",
},{
  "english":"street","transcription":"[ stri:t ]","russian":"улица","tags":"овощи",
},{
  "english":"car","transcription":"[ kɑ: ]","russian":"автомобиль","tags":"",
},{
  "english":"arm","transcription":"[ ɑ:m ]","russian":"рука","tags":"",
},{
  "english":"air","transcription":"[  eər ]","russian":"воздух","tags":"",
},{
  "english":"fox","transcription":"[ fɒks ]","russian":"лиса","tags":"",
},{
  "english":"rabbit","transcription":"[ ˈræbɪt ]","russian":"кролик","tags":"",
},{
  "id":"11369","english":"owl","transcription":"[ aʊl ]","russian":"сова","tags":"птицы",
},{
  "english":"mouse","transcription":"[ maʊs]","russian":"мышь","tags":"животные",
},{
  "english":"tea","transcription":"[ tiː ]","russian":"чай","tags":"напитки",
},{
  "english":"goose","transcription":"[ ɡuːs ]","russian":"гусь","tags":"птицы",
},{
  "english":"flower","transcription":"[ ˈflaʊər ]","russian":"цветок","tags":"растения",
},{
  "english":"bird","transcription":"[ be:d ]","russian":"птица","tags":"птиц",
},{
  "english":"cat","transcription":"[ kæt ]","russian":"кот","tags":""
}
]
function Main() {
    return (
      <div className="main" id="main">
        {vocab.map((v)=>
        <Card  english={v.english} russian={v.russian}  transcription={v.transcription}/>)}
        <Heading/>
         {vocab.map((v)=>
        <Table english={v.english} russian={v.russian}  transcription={v.transcription} />
      )}
         
      </div>
        
    );
  }
  
  export default Main;