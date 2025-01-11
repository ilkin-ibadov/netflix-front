import React from 'react'
import Navbar from './Navbar'
import EmailInput from './EmailInput'
import { useTranslation } from 'react-i18next'

const Entry = () => {
  const {t} = useTranslation()

  return (
    <div className='w-full h-screen lg:h-[700px] px-[9rem] bg-cover bg-no-repeat bg-center bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/AZ-en-20241209-TRIFECTA-perspective_a09d6162-5992-4ec3-a2b8-9081ca80c5b0_large.jpg")] bg-black/70 bg-blend-overlay'>
        <Navbar/>

        <div className='w-[580px] h-fit mx-auto pt-[150px]'>
            <h1 className='font-black text-[60px] text-white leading-[65px] text-center tracking-tighter'>
             {t('entryTitle')}
            </h1>

            <p className='text-white font-semibold text-[20px] text-center mt-5'>{t("entrySubtitle")}</p>

            <p className='text-white font-regular text-base text-center mt-7'>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>

        <EmailInput/>
    </div>
  )
}

export default Entry