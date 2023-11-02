
import { MdArrowBackIosNew } from "react-icons/md"
import { Link } from "react-router-dom"

const BackButton = ({ destination = '/' }) => {
  return (
    <div className="flex">
        <Link
            to={destination}        
            className='bg-sky-800 text-white'
        >
            <MdArrowBackIosNew className="text-[1rem]" />
        </Link>
    </div>
  )
}

export default BackButton