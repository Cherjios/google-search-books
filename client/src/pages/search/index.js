import React, { Component } from "react";
import "./style.css"
import ResultCard from "../../components/ResultCard"
import API from "../../utils/API"



class Search extends Component {

    state = {
        book: [],
        bookSearch: ""
      };

      handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
          [name]: value  //Ask for this line??
        });
      };
      
      handleFormSubmit = event => {
        // When the form is submitted, prevent its default behavior, get recipes update the recipes state
        event.preventDefault();
        API.getBooks(this.state.bookSearch)
          .then(res => this.setState({ book: res.data }))
          .catch(err => console.log(err));
      };


render(){

    return (
        <div>
             <form>
            <div className="form-group">
                <h1> Search a book!</h1>
                <label htmlFor="searchBook">Book</label>
                <input type="text" className="form-control" name="bookSearch" value={this.state.bookSearch} onChange={this.handleInputChange} />
            </div>

            <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>Search!</button>
        </form>
        <div>
            <h2>Results</h2>
            {this.state.book.map(b => (
                <ResultCard 
                key = {b.id}
                title = {b.volumeInfo.title}
                authors = {b.volumeInfo.authors}
                img = {b.volumeInfo.imageLinks.smallThumbnail}
                description = {b.volumeInfo.description}
                />

            ))}
            
        
</div>
        </div>
       



    );
    
}
   
}
export default Search;