const router = require("express").Router();
const bookRoutes = require("./SearchBook.js");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
