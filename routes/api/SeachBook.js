const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
//Should return all saved books as JSON.
router.route("/api/books")
  .get(booksController.findAll)
  //Will be used to save a new book to the database.
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/api/books/:id")
  //Will be used to delete a book from the database by Mongo `_id`.
  .delete(booksController.remove);

//will be used to make an api call to `https://www.googleapis.com/books/v1/volumes?q=<Book Name>` 
//and return the relevant results.
router.route("/google")






module.exports = router;




