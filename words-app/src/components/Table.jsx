
function Table(props) {
    return (
      <div className="table-container">
      
        <table className="table-container__table table">
          <tbody>
            <tr>
              <td>{props.english}</td>
              <td>{props.russian}</td>
              <td>{props.transcription}</td>
              <td></td>
            </tr>
         
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Table;