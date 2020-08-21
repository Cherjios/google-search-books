import React from "react";
import "./style.css";

function ResultCard(props){
    return(
        <div>
            <h2>{props.title}</h2>
            <h4>{props.authors}</h4>
            <a href="/" className="btn btn-warning">View</a>
            <a href="/" className="btn btn-success">Save</a>
            <div>
                <div className="row">
                    <div className="col-4">
                        <img src={props.img} alt={props.title}/>
                    </div>
                    <div className="col-8">
                        <p>{props.description}</p>
                    </div>

                </div>
            </div>

        </div>

    );
}

export default ResultCard;