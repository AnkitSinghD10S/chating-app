import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search ..." className="input input-bordered rounded-full" />
        <button type="submit" className="btn btn-circle bg-green-500 text-white hover:bg-green-900"><FaSearch /></button>

    </form>
  )
}

export default SearchInput