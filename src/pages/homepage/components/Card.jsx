const Card = ({ item }) => {
    return (
        <button>
            <div className='justify-self-center hover:scale-110 transition duration-200 ease-out'>
                <img className='h-[250px] w-[180px]' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" />
            </div>
        </button>
    )
}

export default Card