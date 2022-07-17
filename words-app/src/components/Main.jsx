import Heading from "./Heading-table";
import Table from "./Table";
import TableAdd from "./Table-add";

import {useContext} from 'react';
import { WordsContext } from "../context/context-words";

function Main() {
  const {words, loading} = useContext(WordsContext);
   //if (error) {
    //return <p>{error.message}</p>;
  //}
  if (loading) {
    return <p className="loading">Loading...</p>; 
  }
 
    return (
      <div className="main" id="main">
        <Heading/>
         {words.map((word)=>
        <Table word={word} english={word.english} russian={word.russian}  transcription={word.transcription} key={word.id}/>
      )} 
      <TableAdd/>
      </div>
    );
  }
  
  export default Main;

 

