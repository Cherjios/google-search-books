import React from "react";
import "./style.css";

function FormSearchBook() {
  return (
    <div>

      <form>
        <div class="form-group">
          <label for="exampleInputEmail1"><h1>Search a book!  </h1></label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      </form>
    </div>


  );


}



export default FormSearchBook;