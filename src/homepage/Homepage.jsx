import { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'
import SearchBar from './components/SearchBar'

const Homepage = () => {
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [pageSize, setPageSize] = useState(10)

    const getProducts = async () => {
        // const response = await fetch(searchTerm ? `http://localhost:3000/api/products?pageSize=${pageSize}&searchTerm=${searchTerm}` : `http://localhost:3000/api/products?pageSize=${pageSize}`)

        const baseUrl = `http://localhost:3000/api/products?pageSize=${pageSize}`
        const url = baseUrl + (searchTerm ? `&searchTerm=${searchTerm}` : '')
        const response = await fetch(url)
        const data = await response.json()

        setProducts(data.products)
    }

    useEffect(() => {
        getProducts()
    }, [searchTerm, pageSize])


    return (
        <>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className='grid gap-10 grid-cols-3 p-10'>
                {
                    products?.map(product => <ProductCard key={product._id} product={product} />)
                }

                <button onClick={() => {
                    setPageSize(prevState => prevState + 5)
                }} className='bg-red-500 text-white px-5 py-3 col-span-3 w-fit justify-self-center'>View More</button>
            </div>


        </>
    )
}

export default Homepage