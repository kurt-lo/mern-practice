import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"

const UpdateBooks = () => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setTitle(response.data.title)
        setAuthor(response.data.author)
        setPublishYear(response.data.publishYear)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  }, [])

  const handleUpdateBook = () => {
    const formData = {
      title,
      author,
      publishYear,
    };
    setLoading(true)
    axios
      .put(`http://localhost:5555/books/${id}`, formData)
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
        <h1>Update Book</h1>
      </div>
      {loading ? ( <Spinner /> ) : ('')}
      <div>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author"/>
        <input type="number" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} placeholder="Publish Year"/>
        <button type="submit" onClick={handleUpdateBook}>Update</button>
      </div>
    </section>
  )
}

export default UpdateBooks