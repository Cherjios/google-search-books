import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function(query) {
    return axios.get("/api/google", { params: { q: query } });
  },
getDbBooks: function(){
    return axios.get("/api/books");
},
postDbBooks: function(book){
    return axios.post("/api/books", book);
},
deleteDbBooks:function(id){
    return axios.delete("/api/books/"+id)
}

};