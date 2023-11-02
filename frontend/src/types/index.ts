export interface Book {
    _id: string;
    title: string;
    author: string;
    publishYear: number
    createdAt: string;
    updatedAt: string;
}

export interface BooksProps {
    books: Book[]
}