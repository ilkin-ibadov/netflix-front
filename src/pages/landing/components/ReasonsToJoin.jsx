import television from "images/television.svg"
import download from "images/download.svg"
import watch from "images/watch.svg"
import profiles from "images/profiles.svg"
import ReasonCard from "./ReasonCard"
import { useTranslation } from "react-i18next"

const ReasonsToJoin = () => {
    const {t} = useTranslation()

    const items = [
        {
            title: t("enjoyOnYourTV"),
            desc: t("enjoyOnYourTVDescription"),
            img: television
        },
        {
            title: t("downloadYourShowsToWatchOffline"),
            desc: t("downloadYourShowsToWatchOfflineDescription"),
            img: download
        },
        {
            title: "Watch everywhere",
            desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            img: watch
        },
        {
            title: "Create profiles for kids",
            desc: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
            img: profiles
        },
    ]



    return (
        <div>
            <h2 className='text-white font-medium text-[24px] mb-4'>More Reasons to Join</h2>
            <div className="flex gap-4">
                {items.map(item => <ReasonCard item={item}/>)}
            </div>
        </div>
    )
}

export default ReasonsToJoin