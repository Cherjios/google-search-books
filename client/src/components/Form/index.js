import React from "react";
import "./style.css";

function FormSearchBook() {
  return (
    <div>

      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Search a book!</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      </form>
    </div>


  );


}



export default FormSearchBook;