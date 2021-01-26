const express = require('express');
const { model } = require('mongoose');
const Book = require('./model/book');
const router = express.Router();

router.get('/books',async (req,res)=>{
    const book = await Book.find();
    res.send(book);
});
module.exports = router;