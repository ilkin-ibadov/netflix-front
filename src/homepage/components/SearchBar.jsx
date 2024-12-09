import React from 'react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='flex items-center justify-center border-b border-zinc-400 py-4 gap-3'>
            <h3>Search:</h3>
            <input value={searchTerm} onChange={(e) => {
                setSearchTerm(e.target.value)
            }} placeholder='Search for items' className='border border-zinc-400 p-2' type="text" />
        </div>
    )
}

export default SearchBar