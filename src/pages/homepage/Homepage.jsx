import { useStore } from "zustand"
import { themeStore } from "common/Store.js"
import { useEffect, useState } from "react"
import Movie from "./components/Movie"
import TV from "./components/TV"

import Navbar from "./components/Navbar"
import Home from "./components/Home"

const Homepage = () => {
    const [selectedTab, setSelectedTab] = useState({ title: "Home", value: "home" })
    const [trendingMovies, setTrendingMovies] = useState([])
    const [trendingShows, setTrendingShows] = useState([])
    const [backgroundItem, setBackgroundItem] = useState(null)
    const { token } = useStore(themeStore)

    const navbarItems = [{ title: "Home", value: "home" }, { title: "Movies", value: "movie" }, { title: "TV Shows", value: "tv" }]

    const getTrendingMovies = async () => {
        try {
            const response = await fetch("http://localhost:5001/api/v1/movie/trending")

            const data = await response.json()

            if (response.ok) {
                setTrendingMovies(data.content)
                setBackgroundItem(data.content[0])
            }
        } catch (error) {
            console.error(error)
        }
    }

    const getTrendingShows = async () => {
        try {
            const response = await fetch("http://localhost:5001/api/v1/tv/trending")

            const data = await response.json()

            if (response.ok) {
                setTrendingShows(data.content)
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getTrendingMovies()
        getTrendingShows()
    }, [])

    const visibleContent = () => {
        switch (selectedTab.value) {
            case "movie":
                return <Movie data={trendingMovies} />
            case "tv":
                return <TV data={trendingShows} />
            default:
                return <Home backgroundItem={backgroundItem} />
        }
    }

    return (
        <>
            <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} navbarItems={navbarItems} />
            {visibleContent()}
        </>
    )
}

export default Homepage