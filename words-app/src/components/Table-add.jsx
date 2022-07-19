import {useContext, useState} from 'react';
import { WordsContext } from "../context/context-words";
function TableAdd() {
    const { addWords } = useContext(WordsContext);
    const [english, setEnglish] = useState();
    const [russian, setRussian] = useState();
    const [transcription, setTranscription] = useState();

    const word = {
        english: english,
        russian: russian,
        transcription: transcription,
        tags: "город",
        tags_json: [],
      }

    const handleAdd = (e) => {
        console.log(russian, english, transcription)
        addWords(word);
    }

    const handleEnglish = (e) => {
        setEnglish(e.target.value);
    }

    const handleRussian = (e) => {
        setRussian(e.target.value);
    }

    const handleTranscription = (e) => {
        setTranscription(e.target.value);
    }

    return (
      <div className="table-container">
         <form className="form-add">
            <input type="text" className="add" onChange={handleEnglish} placeholder="english"/>
            <input type="text" className="add" onChange={handleRussian} placeholder="russian"/>
            <input type="text" className="add" onChange={handleTranscription} placeholder="translation"/>
            <button className="button-container__add" type="button" onClick={handleAdd}>
                <i className="fa-solid fa-plus"></i>Add 
            </button>
         </form>
      </div>
    
  )}

 export default TableAdd;