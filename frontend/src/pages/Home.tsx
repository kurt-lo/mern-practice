import axios from "axios"
import { useEffect, useState } from "react"
import { Book } from "../types"
import { Link } from "react-router-dom"
import { MdAddBox } from "react-icons/md";
import { BiSolidMessageEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { BsFillDisplayFill } from "react-icons/bs";
import Spinner from "../components/Spinner";

const Home = () => {

  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data as Book[]);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <section className="w-full flex flex-col">
      <div className="">
        <h1>Books List</h1>
        <Link to='/books/add'>
          <MdAddBox />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
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
      )}
    </section>
  )
}

export default Home