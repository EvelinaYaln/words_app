import Heading from "./Heading-table";
import Table from "./Table";
import TableAdd from "./Table-add";
import {useContext} from 'react';
import { WordsContext } from "../context/context-words";

function Main() {
  const {words, loading} = useContext(WordsContext);
  if (loading) {
    return <p>Loading ...</p>; 
  }
    return (
      <div className="main" id="main">
        <Heading/>
         {words.map((word)=>
        <Table english={word.english} russian={word.russian}  transcription={word.transcription} key={word.id}/>
      )} 
      <TableAdd/>
      </div>
    );
  }
  
  export default Main;

 

