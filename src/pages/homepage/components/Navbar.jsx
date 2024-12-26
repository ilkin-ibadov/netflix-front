import netflix from "images/netflixLogo.svg"

const Navbar = ({ selectedTab, setSelectedTab, navbarItems }) => {
    return (
        <div className="absolute w-screen top-0 left-0 flex items-center self-start px-[90px] py-[30px]">
            <img src={netflix} alt="" />
            <div className="flex items-center gap-[28px] ml-[67px]">
                {
                    navbarItems.map(item => <button onClick={() => {
                        setSelectedTab(item)
                    }} className={`text-[22px] text-white ${item.value === selectedTab.value && "font-bold"}`}>{item.title}</button>)
                }
            </div>
        </div>
    )
}

export default Navbar