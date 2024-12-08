import { NavLink } from "react-router";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="flex justify-center items-center p-4 border-b border-zinc-400 gap-5">
            <h3>Search:</h3>
            <input placeholder="Enter search term" className="border border-zinc-300 pl-3" value={searchTerm} onChange={(e) => {
                setSearchTerm(e.target.value)
            }} type="text" />
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>

        </div>
    )
}

export default SearchBar