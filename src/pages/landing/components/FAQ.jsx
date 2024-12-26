import FAQItem from "./FAQItem"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const FAQ = () => {
    const {t} = useTranslation()
    const [openItem, setOpenItem] = useState(null)

    const items = [
        {
            title: t("whatIsNetflix"),
            desc:  t("whatIsNetflixDesc"),
            id: 1
        },
        {
            title: t('howMuchDoesNetflixCost'),
            desc: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 11.99 a month (pre-tax). No extra costs, no contracts.",
            id: 2
        },
        {
            title: "Where can I watch?",
            desc: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.[break]You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
            id: 3
        },
        {
            title: "How do I cancel?",
            desc: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
            id: 4
        },
        {
            title: "What can I watch on Netflix?",
            desc: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
            id: 5
        },
        {
            title: "Is Netflix good for kids?",
            desc: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.[break]Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
            id: 6
        },
        {
            title: "Why am I seeing this language?",
            desc: "Your browser preferences determine the language shown here.",
            id: 7
        },
    ]

    return (
        <div className="mt-[64px]">
            <h2 className="text-[24px] font-medium text-white mb-4">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-[8px]">
                {
                    items.map(item => <FAQItem item={item} openItem={openItem} setOpenItem={setOpenItem}/>)
                }
            </div>
        </div>
    )
}

export default FAQ