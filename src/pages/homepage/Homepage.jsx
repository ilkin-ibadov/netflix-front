import { useEffect, useState } from 'react'
import Home from './components/Home'
import Shows from './components/Shows'
import Movies from './components/Movies'
import Navbar from './components/Navbar'

const Homepage = () => {
    const [selectedTab, setSelectedTab] = useState({
        title: "Home",
        value: "home"
    })
    const [trendingMovies, setTrendingMovies] = useState([])

    const tabItems = [
        {
            title: "Home",
            value: "home"
        },
        {
            title: "TV Shows",
            value: "tv"
        },
        {
            title: "Movies",
            value: "movie"
        },
    ]


    const getMovies = async () => {
        try {
            const response = await fetch(`http://localhost:5001/api/v1/movie/trending`)
            const data = await response.json()

            if (response.ok) {
                setTrendingMovies(data.content)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    const visibleTab = () => {
        switch (selectedTab.value) {
            case "movie":
                return <Movies trendingMovies={trendingMovies} />
            case "tv":
                return <Shows />
            default:
                return <Home visibleMovie={trendingMovies[0]} />
        }
    }

    return (
        <div className='relative'>
            <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} tabItems={tabItems} />
            {visibleTab()}
        </div>
    )
}

export default Homepage