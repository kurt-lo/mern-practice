import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

//ROUTE FOR SAVING/CREATING NEW BOOK
router.post('/', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send({ message: 'Complete all the fields' })
        } else {
            const newBook = {
                title: request.body.title,
                author: request.body.author,
                publishYear: request.body.publishYear,
            }
            const book = await Book.create(newBook);
            return response.status(201).send(book);
        }
    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
})

//ROUTE FOR GETTING ALL THE BOOKS
router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});
        response.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
});

//ROUTE FOR GETTING BOOKS BY ID
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const book = await Book.findById(id);
        response.status(200).json(book);
    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
});

//ROUTE FOR UPDATING THE BOOKS
router.put('/:id', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send({ message: 'Complete all the fields' })
        }
        const { id } = request.params;
        const result = await Book.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Book not found!' })
        } else {
            return response.status(200).send({ message: 'Book updated successfully!' })
        }
    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
});

//ROUTE FOR DELETE BOOKS
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Book not found!' })
        } else {
            return response.status(200).send({ message: 'Book deleted successfully!' })
        }
    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message })
    }
});

export default router;