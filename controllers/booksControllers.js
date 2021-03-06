const db = require("../models");
const axios = require("axios");

//Defining methods for booksControllers
module.exports = {
    findAll:function(req, res){
        db.Books.find(req.query)
        .sort({title: 1})
        .then(dbModel => res.json(dbModel))
        .cath(err => res.status(422).json(err));
    },
    create:function(req, res){
        db.Books.create(req.body)
        .then(dbModel=> res.json(dbModel))
        .cath(err => res.json(422).json(err));
    },
    remove:function(req, res){
        db.Books.findById({_id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    googleBooks:function(req,res){
      console.log("Google book search")
        const {query:params} = req
        axios.get("https://www.googleapis.com/books/v1/volumes",{params} )
        .then(results=> 
            results.data.items.filter(book=> 
            book.volumeInfo.title &&
            book.volumeInfo.authors &&
            book.volumeInfo.description &&
            book.volumeInfo.imageLinks.smallThumbnail &&
            book.volumeInfo.infoLink
          )).then(apiBooks =>
            db.Books.find().then(dbBooks =>
              apiBooks.filter(apiBook =>
                dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
              )
            )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
        );
    }
};