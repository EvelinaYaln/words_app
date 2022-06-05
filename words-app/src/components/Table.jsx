import React, {useState} from 'react';

function Table(props) {
    const [state, setState] = useState(props);
    const [edit, setEdit] = useState(false);

    const handleEdit = () => {
      setEdit(!edit);
    }
    const handleChange =(event)=> {
      setState({
        ...state,
      [event.target.dataset.name]:event.target.value,
      })
    }
    const handleCancel=()=>{
      setState({
        ...props,
      })
    }
    
  return (
    <div className="table-container">
      {edit ?
      <form className="table">
        <input data-name={"english"} name="english-word" type="text" value={state.english} onChange={handleChange} />
        <input data-name={"russian"} name="russian-word" type="text" value={state.russian} onChange={handleChange} />
        <input data-name={"transcription"} name="transcription" type="text" value={state.transcription} onChange={handleChange} />
      </form>
        :
        <>
        <table className="table">
          <tbody>
            <tr>
              <td>{props.english}</td>
              <td>{props.russian}</td>
              <td>{props.transcription}</td>
            </tr>
          </tbody>
        </table>
       </>
        }
       <div className="button-container">
          {edit ? 
          <>
          <button className="button-container__save" type="button">
            <i className="fa-solid fa-check"></i>
            Save 
          </button>
          <button className="button-container__cancel" onClick={handleCancel} type="button">
            Cancel 
          </button> </>:
          <button  className="button-container__correct" id="correct" type="button" onClick={handleEdit}>
            <i className="fa-solid fa-pen"></i>
          </button> }
          <button className="button-container__delete" type="button">
            <i className="fa-solid fa-trash-can"></i>
           </button>      
          </div>
     
    </div>
    );
  }
   
export default Table;

/*<div className="button-container">
          {edit ? 
          <>
          <button className="button-container__save" type="button">
            <i className="fa-solid fa-check"></i>
            Save 
          </button>
          <button className="button-container__cancel" onClick={handleCancel} type="button">
            Cancel 
          </button> </>:
          <button  className="button-container__correct" id="correct" type="button" onClick={handleEdit}>
            <i className="fa-solid fa-pen"></i>
          </button> }
          <button className="button-container__delete" type="button">
            <i className="fa-solid fa-trash-can"></i>
           </button>      
          </div>
    </div>*/