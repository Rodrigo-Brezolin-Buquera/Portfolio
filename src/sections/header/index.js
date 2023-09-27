import React from 'react'
import { useLanguage } from '../../global/LanguageContext'

const Header = () => {
    const { language, toggleLanguage } = useLanguage()

    return (
        <header className="w-full flex justify-end pr-2 absolute top-0 z-10" >
            <div onClick={toggleLanguage}>
                <p>{language === "pt" ? "en" : "pt"}</p>

            </div>

        </header>
    )
}

export default Header