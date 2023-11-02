import { AiFillDelete } from "react-icons/ai"
import { BiSolidMessageEdit } from "react-icons/bi"
import { BsFillDisplayFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { Book } from "../../types"

const BooksTable = ({ books }: { books: Book[] }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publish Year</th>
                    <th>Operations</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) => (
                    <tr key={book._id}>
                        <td>{index + 1}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.publishYear}</td>
                        <td>
                            <div>
                                <Link to={`/books/details/${book._id}`}>
                                    <BsFillDisplayFill />
                                </Link>
                            </div>
                            <div>
                                <Link to={`/books/update/${book._id}`}>
                                    <BiSolidMessageEdit />
                                </Link>
                            </div>
                            <div>
                                <Link to={`/books/delete/${book._id}`}>
                                    <AiFillDelete />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default BooksTable