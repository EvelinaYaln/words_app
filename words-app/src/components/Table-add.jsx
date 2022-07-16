import {useContext} from 'react';
import { WordsContext } from "../context/context-words";
function TableAdd() {
    const { addWords } = useContext(WordsContext);

    const handleAdd = () => {
        addWords();
    }

    return (
      <div className="table-container">
         <form className="table">
            <input type="text" className="add"/>
            <input type="text" className="add"/>
            <input type="text" className="add"/>
            <button className="button-container__add" type="button" onClick={handleAdd}>
                <i className="fa-solid fa-plus"></i>Add 
            </button>
         </form>
      </div>
    
  )}

 export default TableAdd;