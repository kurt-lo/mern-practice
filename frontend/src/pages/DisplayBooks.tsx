import { useEffect, useState } from "react"
import { Book } from "../types"
import { useParams } from "react-router-dom"
import axios from "axios"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"


const DisplayBooks = () => {

  const [book, setBook] = useState<Book | null>(null)
  const [loading, setLoading] = useState(false)

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data as Book);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error)
        setLoading(false);
      })
  }, [id])

  const formatDate = (dateString: string | undefined): string => {
    try {
      if (dateString) {
        const date = new Date(dateString);
        if (!isNaN(date.getTime())) {
          return date.toString();
        }
      }
    } catch (error) {
      console.error('Error parsing date:', error);
    }

    return 'N/A';
  }

  return (
    <section>
      <div>
        <BackButton />
        <h1>Show Book</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="">
          <div>
            <p>ID</p>
            <p>{book?._id}</p>
          </div>
          <div>
            <p>Title</p>
            <p>{book?.title}</p>
          </div>
          <div>
            <p>Author</p>
            <p>{book?.author}</p>
          </div>
          <div>
            <p>Publish Year</p>
            <p>{book?.publishYear}</p>
          </div>
          <div>
            <p>Created Time</p>
            <p>{formatDate(book?.createdAt)}</p>
          </div>
          <div>
            <p>Last Update Time</p>
            <p>{formatDate(book?.updatedAt)}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default DisplayBooks