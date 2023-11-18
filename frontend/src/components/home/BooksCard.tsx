import { Book } from '../../types'
import SingleBookCard from './SingleBookCard'

const BooksCard = ({ books }: { books: Book[]}) => {
  return (
    <div>
        {books.map((item) =>(
          <SingleBookCard key={item._id} book={item}/>
        ))}
    </div>
  )
}

export default BooksCard