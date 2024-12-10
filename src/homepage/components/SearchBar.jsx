import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { ThemeContext } from '../../App'
import { useStore } from 'zustand'
import { themeStore } from '../../common/Store'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const navigate = useNavigate()
    // const { theme, setTheme } = useContext(ThemeContext)
    const { theme, toggle } = useStore(themeStore)

    return (
        <div className='flex items-center justify-center border-b border-zinc-400 py-4 gap-3'>
            <button onClick={() => {
                toggle()
                // setTheme(prevState => prevState === "light" ? "dark" : "light")
            }}>{theme === "light" ? "Activate dark theme" : "Activate light theme"}</button>
            <button onClick={() => {
                navigate('/login')
            }}>Login</button>
            <h3>Search:</h3>
            <input value={searchTerm} onChange={(e) => {
                setSearchTerm(e.target.value)
            }} placeholder='Search for items' className='border border-zinc-400 p-2' type="text" />
        </div>
    )
}

export default SearchBar