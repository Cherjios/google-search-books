const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  authors: { type: [String], required: true },
  description: {type:String, require: true},
  img:{type:String, require: true},
  link:{type:String, require: true},
  title: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

