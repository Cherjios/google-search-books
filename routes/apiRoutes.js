
const router = require("express").Router();
const booksControllers = require("../controllers/booksControllers")

router
    .route("/api/books")
    .get(booksControllers.findAll)
    .post(booksControllers.create);

router
    .route("/api/books/:id")
    .delete(booksControllers.remove);

    
router
    .route("/google")
    .get(booksControllers.googleBooks);

module.exports = router;

// * `/api/books` (get) - Should return all saved books as JSON.
// * `/api/books` (post) - Will be used to save a new book to the database.
// * `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.
// * `/google` - will be used to make an api call to `https://www.googleapis.com/books/v1/volumes?q=<Book Name>` and return the relevant results.