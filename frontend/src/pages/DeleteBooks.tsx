import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const DeleteBooks = () => {

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  const handleDeleteBooks = () => {
    setLoading(true)
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  }

  return (
    <section>
      <div>
        <BackButton />
        <h1>Delete Book</h1>
      </div>
      {loading ? <Spinner /> : ''}
      <div>
        <h3>Are you sure you want to delete this?</h3>
        <button onClick={handleDeleteBooks}>Delete</button>
      </div>
    </section>
  )
}

export default DeleteBooks