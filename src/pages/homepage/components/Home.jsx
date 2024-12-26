import top10 from "icons/top10.svg"
import { motion } from 'motion/react'

const Home = ({ backgroundItem }) => {
    return (

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.4 } }}>
            {backgroundItem &&
                <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${backgroundItem.backdrop_path})` }} className={`w-full h-screen flex items-center bg-cover bg-no-repeat bg-center bg-black/50 bg-blend-overlay`}>

                    <div className="text-white max-w-[400px] ml-[90px]">
                        <h2 className="text-7xl">{backgroundItem.title}</h2>
                        <div className="flex items-center gap-2 my-[20px]">
                            <img className="size-[44px]" src={top10} alt="" />
                            <h3 className="text-2xl">#1 in Movies Today</h3>
                        </div>
                        <p>{backgroundItem.overview.substring(0, 150)}...</p>
                        <div className="flex items-center gap-5 mt-[20px]">
                            <button className="px-[30px] py-[10px] bg-white text-black font-bold rounded-[5px]">Play</button>
                            <button className="px-[30px] py-[10px] bg-[#515451] text-white font-bold rounded-[5px]">More Info</button>
                        </div>
                    </div>
                </div>}
        </motion.div>

    )
}

export default Home