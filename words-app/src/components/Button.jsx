
function Button() {
    return (
      <div className="button-container">
         <button className="button-container__save">
          <i className="fa-solid fa-check"></i>
          Save 
        </button>
        <button  className="button-container__correct" id="correct">
          <i className="fa-solid fa-pen"></i>
        </button>
        <button className="button-container__delete">
          <i className="fa-solid fa-trash-can"></i>
        </button>
        
      </div>
    );
  }
 

  export default Button;