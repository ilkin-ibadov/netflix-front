import MovieCard from './MovieCard'
import CustomSelect from './CustomSelect'
import { useState, useEffect } from 'react'
import Modal from './Modal'

const Trending = ({ scrollY }) => {
    const [data, setData] = useState([])
    const [selectedOption, setSelectedOption] = useState({ title: "Movies", value: "movie" })
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    const options = [{ title: "Movies", value: "movie" }, { title: "TV Shows", value: "tv" }]

    const getData = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/${selectedOption.value}/trending`)
            const data = await response.json()
            setData(data.content)
        } catch (error) {
            console.error(error)
        }
    }

    const handleModalClose = () => {
        setModalOpen(false)
        setSelectedItem(null)
    }

    useEffect(() => {
        getData()
    }, [selectedOption])

    useEffect(() => {
        if (selectedItem) {
            setModalOpen(true)
        }
    }, [selectedItem])

    useEffect(() => {
        document.body.style.overflow = modalOpen ? "hidden" : 'scroll'
    }, [modalOpen])


    return (
        <div className='w-full py-20 relative'>
            <h3 className='text-white text-2xl font-semibold mb-4'>Trending Now</h3>
            <CustomSelect selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                options={options} />
            <div className='w-full flex gap-12 overflow-scroll py-5 pl-7'>
                {data.map((item, index) => <MovieCard setSelectedItem={setSelectedItem} item={item} index={index} />)}
            </div>

            {
                modalOpen &&
                <Modal scrollY={scrollY} data={selectedItem} handleModalClose={handleModalClose} />
            }

        </div>
    )
}

export default Trending