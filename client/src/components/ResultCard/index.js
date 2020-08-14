import React from "react";
import "./style.css"

function ResultCard(props) {
    return (
        <div>
        <a href="" className="btn btn-warning float-right">View</a> 
        <a href="#" className="btn btn-success float-right">Save</a>
        <h5 className="card-title">props.bookName</h5>
          <h6 className="card-title">props.bookAuthors</h6>
        <img src={props.img} className="card-img-top" alt={props.bookName} />
        <p className="card-text">props.bookDescription</p>
        
      </div>
    )
}

export default ResultCard