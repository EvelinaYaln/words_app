import React, {useEffect, useState, useContext} from 'react';
import { WordsContext } from "../context/context-words";
function Table(props) {
    const {editWords, deleteWords} = useContext(WordsContext);
    const [english, setEnglish] = useState(props.english);
    const [russian, setRussian] = useState(props.russian);
    const [transcription, setTranscription] = useState(props.transcription);

    const [emptyEnglish, setEmptyEnglish] =  useState('');
    const [emptyRussian, setEmptyRussian] =  useState('');
    const [emptyTranscrption, setEmptyTranscription] =  useState('');

    const [edit, setEdit] = useState(false);
   
    const [valid, setValid] = useState(false);
 
   
    useEffect(()=> {
      if (emptyEnglish || emptyRussian || emptyTranscrption) {
        setValid(false)
      } else {
        setValid(true)
      }
    },[emptyEnglish, emptyRussian, emptyTranscrption]);

    const handleEdit = () => {
      setEdit(!edit);
    }
 
    const word = {
      english: english,
      russian: russian,
      transcription: transcription,
      id: props.word.id,
    }

    const handleSave = () => {
      setEdit(!edit);
      save();
      editWords(word);
    }

    const save = () => {
      console.log(english,russian,transcription);
    }

    const handleDelete = () => {
      deleteWords(props.word);
      
    }

    /*const handleEnglishErr = (e) => {
      setEnglish(e.target.value);
      console.log(e.target.value)
      const re = "/^[A-Z]$/i";
      if (!e.target.value.match(re) ) {
        setErrEnglish('Поле заполено неверно')
      } else //console.log(e.target.value);
             setErrEnglish('');
    }*/

    const handleEnglish = (e) => {
      setEnglish(e.target.value);
        if (e.target.value.trim() === '') {
          setEmptyEnglish('Поле не может быть пустым')
        } else {
        setEmptyEnglish('');
      }
    }
    const handleRussian = (e) => {
      setRussian(e.target.value);
      if (e.target.value.trim() === '') {
        setEmptyRussian('Поле не может быть пустым')
      } else setEmptyRussian('');
    }

    const handleTranscription = (e) => {
      setTranscription(e.target.value);
      if (e.target.value.trim() === '') {
        setEmptyTranscription('Поле не может быть пустым')
      } else setEmptyTranscription('');
    }
  
    /*const handleChange =(event)=> {
      setState({
        ...state,
      [event.target.dataset.name]:event.target.value,
      })
      if (event.target.value.trim() === '') {
        setErrorInput('Поле не может быть пустым')
      } else setErrorInput('');
    }*/

    const handleCancel=()=>{
      setEnglish(
        props.english,
      )
      setRussian(
        props.russian,
      )
      setTranscription(
        props.transcription,
      )
    }
    
  return (
    <div className="table-container">
      {edit ?
      <form className="table">
        <div className='inline-block'>
          {emptyEnglish && <div className='error'>{emptyEnglish}</div>}
          <input className={emptyEnglish ? "red" : ""} data-name={"english"} name="english-word" type="text" value={english} onChange={handleEnglish} />
        </div>
        <div className='inline-block'>
          {emptyRussian && <div className='error'>{emptyRussian}</div>}
          <input className={emptyRussian ? "red" : ""} data-name={"russian"} name="russian-word" type="text" value={russian} onChange={handleRussian} />
        </div>
        <div className='inline-block'>
          {emptyTranscrption && <div className='error'>{emptyTranscrption}</div>} 
          <input className={emptyTranscrption ? "red" : ""} data-name={"transcription"} name="transcription" type="text" value={transcription} onChange={handleTranscription}  />
          <div className="button-container">
          
        </div> 
          {edit ? 
            <>
              <button className="button-container__save" type="button"  disabled={!valid} onClick={handleSave} >
                <i className="fa-solid fa-check"></i>Save 
              </button>
              <button className="button-container__cancel" onClick={handleCancel} type="button">Cancel 
              </button> 
            </>:
              <button  className="button-container__correct" id="correct" type="button" onClick={handleEdit}>
                <i className="fa-solid fa-pen"></i>
              </button> }
              <button className="button-container__delete" type="button" onClick={handleDelete}>
                <i className="fa-solid fa-trash-can"></i>
              </button>      
        </div>
      </form> :
        <>
       
        
        <table className="table">
          <tbody>
            <tr>
              <td>{props.english}</td>
              <td>{props.russian}</td>
              <td>{props.transcription}</td>
              <td> 
                <div className="button-container">
                  {edit ? 
                    <>
                      <button className="button-container__save" type="button" disabled={!valid}>
                        <i className="fa-solid fa-check"></i>Save 
                      </button>
                      <button className="button-container__cancel" onClick={handleCancel} type="button">Cancel 
                      </button> 
                    </>:
                      <button  className="button-container__correct" id="correct" type="button" onClick={handleEdit}>
                        <i className="fa-solid fa-pen"></i>
                      </button> }
                      <button className="button-container__delete" type="button" onClick={handleDelete}>
                        <i className="fa-solid fa-trash-can"></i>
                      </button>      
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        </>}
    </div>
    );
  }
  
export default Table;


