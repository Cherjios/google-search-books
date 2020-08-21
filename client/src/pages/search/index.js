import React from "react";
import "./style.css"

function Search() {

    

    return (
        <form>
            <div className="form-group">
                <h1> Search a book!</h1>
                <label htmlFor="searchBook">Book</label>
                <input type="text" className="form-control" aria-describedby="searchBook" />
            </div>

            <button type="submit" className="btn btn-primary">Search!</button>
        </form>


    );
}
export default Search;