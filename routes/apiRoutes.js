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
    .route("/api/google")
    .get(booksControllers.googleBooks);

router.get("/google/:name", (req, res) => {
    // make an api call to `https://www.googleapis.com/books/v1/volumes?q=<Book Name>` and return the relevant results.

    console.log("Looking for: " + req.params.name);


    axios.get("https://www.googleapis.com/books/v1/volumes",
        { params: { q: req.params.name } }).then(({ data }) => {

            console.log(data.items);

            res.json(data.items);
        })
        .catch(err => res.status(422).json(err));
});


module.exports = router;

// * `/api/books` (get) - Should return all saved books as JSON.
// * `/api/books` (post) - Will be used to save a new book to the database.
// * `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.
// * `/google` - will be used to make an api call to `https://www.googleapis.com/books/v1/volumes?q=<Book Name>` and return the relevant results.