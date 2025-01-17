import top10 from "icons/top10.svg"
import { motion } from "motion/react"

const Home = ({ visibleMovie }) => {
  return (

    visibleMovie &&
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.3 } }}>
      <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${visibleMovie.backdrop_path})` }} className='h-screen w-full flex items-center bg-cover bg-no-repeat bg-center bg-black/50 bg-blend-overlay'>
        <div className="max-w-[400px] ml-[90px]">
          <h2 className="text-7xl text-white font-bold">{visibleMovie.title}</h2>
          <div className="flex items-center gap-2 my-5">
            <img src={top10} alt="" />
            <h3 className="text-white text-2xl font-bold">#1 in Movies Today</h3>
          </div>
          <p className="text-white">{visibleMovie.overview.slice(0, 150)}...</p>
          <div className="flex items-center gap-3 mt-5">
            <button className="bg-white text-black font-bold px-6 py-3 rounded-[4px] hover:bg-zinc-300 transition duration-200 ease-in">Play</button>
            <button className="bg-[#515451] text-white font-bold px-6 py-3 rounded-[4px]  hover:bg-zinc-500 transition duration-200 ease-in">More Info</button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home