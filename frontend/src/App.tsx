import axios from "axios";
import { useEffect } from "react"
import { Route, Routes } from "react-router-dom";
import AddBooks from "./pages/AddBooks";
import Home from "./pages/Home";
import DisplayBooks from "./pages/DisplayBooks";
import UpdateBooks from "./pages/UpdateBooks";
import DeleteBooks from "./pages/DeleteBooks";

const App = () => {

  useEffect(() => {
    axios.get('http://localhost:5555/books')
    .then(
      response => console.log(response)
    )
  }, [])
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/add" element={<AddBooks />} />
      <Route path="/books/details/:id" element={<DisplayBooks />} />
      <Route path="/books/update/:id" element={<UpdateBooks />} />
      <Route path="/books/delete/:id" element={<DeleteBooks />} />
    </Routes>
  )
}

export default App