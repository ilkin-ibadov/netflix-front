import { useNavigate } from 'react-router'
import { useStore } from 'zustand'
import { themeStore } from '../../common/Store'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const { theme, toggle } = useStore(themeStore)
    const navigate = useNavigate()

    return (
        <div className='flex items-center justify-between border-b border-zinc-400 py-4 px-[120px] gap-3'>
            <div className='flex items-center gap-10'>
                <div className='flex items-center gap-2'>
                    🌞
                    <button className={`w-[50px] border h-[25px] border-zinc-400 rounded-full flex ${theme === 'light' ? "justify-start" : "justify-end"} bg-white`} onClick={toggle}>
                        <div className={`h-[22px] w-[22px] ${theme === 'light' ? "bg-yellow-400" : "bg-zinc-500"} rounded-full transition duration-1000 ease-in-out`}></div>
                    </button>
                    🌙
                </div>


                <button onClick={() => {
                    navigate('/login')
                }}>Login</button>
            </div>

            <div className='flex items-center gap-3'>
            <h3>Search:</h3>
            <input value={searchTerm} onChange={(e) => {
                setSearchTerm(e.target.value)
            }} placeholder='Search for items' className='border border-zinc-400 p-2' type="text" />
            </div>
        </div>
    )
}

export default SearchBar