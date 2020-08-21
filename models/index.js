const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title:{type:String, require: true},
    authors:{type:String, require: true},
    description:{type:String, require:true},
    image:String,
    link:String
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;