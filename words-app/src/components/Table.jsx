import Button from './Button';
function Table(props) {
    return (
      <div className="table-container">
      
        <table className="table-container__table table">
          <tbody>
            <tr>
              <td contentEditable="true">{props.english} </td>
              <td>{props.russian}</td>
              <td>{props.transcription}</td>
              <td><Button/></td>
            </tr>
         
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Table;