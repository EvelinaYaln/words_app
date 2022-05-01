
function Button() {
    return (
      <div className="button-container">
         <button className="button-container__save">
          <i class="fa-solid fa-check"></i>
          Save 
        </button>
<button  className="button-container__correct" id="correct">
          <i class="fa-solid fa-pen"></i>
        </button>
        <button className="button-container__delete">
          <i class="fa-solid fa-trash-can"></i>
        </button>
        
      </div>
    );
  }
 

  export default Button;