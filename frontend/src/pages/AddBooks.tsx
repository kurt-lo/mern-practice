import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"

const AddBooks = () => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleAddBook = () => {
    const formData = {
      title,
      author,
      publishYear,
    };
    setLoading(true)
    axios
      .post('http://localhost:5555/books', formData)
      .then(() => {
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
        console.log('failed!')
        setLoading(false)
      })
  }

  return (
    <section>
      <div>
        <BackButton />
        <h1>Add Book</h1>
      </div>
      {loading ? ( <Spinner /> ) : ('')}
      <div>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author"/>
        <input type="number" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} placeholder="Publish Year"/>
        <button type="submit" onClick={handleAddBook}>Add</button>
      </div>
    </section>
  )
}

export default AddBooks