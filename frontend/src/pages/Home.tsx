import axios from "axios"
import { useEffect, useState } from "react"
import { Book } from "../types"
import { Link } from "react-router-dom"
import { MdAddBox } from "react-icons/md";
import Spinner from "../components/Spinner";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {

  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(false)
  const [showType, setShowType] = useState('table')

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
      <div className="bg-black">
        <button onClick={() => setShowType('table')} className="text-white">Table</button>
        <button onClick={() => setShowType('card')} className="text-white">Card</button>
      </div>
      <div className="">
        <h1>Books List</h1>
        <Link to='/books/add'>
          <MdAddBox />
        </Link>
      </div>
      {loading ? (<Spinner />) : showType === 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />)}
    </section>
  )
}

export default Home