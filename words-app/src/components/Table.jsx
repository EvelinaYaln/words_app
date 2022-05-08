import React, {useState} from 'react';
import Button from './Button';

function Table(props) {
    const [state, setState] = useState(props);

    const handleChange =(event)=> {
      setState({
        ...state,
      [event.target.dataset.name]:event.target.value,
      })
    }
    //const handleCancel=()=>{
      //setState({
     //   ...props,
     // })
    return (
      //<div className="table-container">
      
        //<table className="table-container__table table">
          //<tbody>
           // <tr>
             // <td>{props.english} </td>
             // <td>{props.russian}</td>
              //<td>{props.transcription}</td>
              //<td><Button/></td>
           // </tr>
         
         // </tbody>
       //</table>
      //</div>
    <div className="table-container">
      <form className="table-container__table table">
        <input data-name={"english"} name="english-word" type="text" value={state.english} onChange={handleChange}/>
        <input data-name={"russian"} name="russian-word" type="text" value={state.russian} onChange={handleChange}/>
        <input data-name={"transcription"} name="transcription" type="text" value={state.transcription} onChange={handleChange}/>
        <Button/>
      </form>
    </div>
      );
    }

  export default Table;