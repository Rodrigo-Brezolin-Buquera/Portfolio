import React from 'react'
import { useLanguage } from '../../global/LanguageContext'
import brFlag from "../../assets/brFlag.svg"
import ueaFlag from "../../assets/ueaFlag.svg"

const Header = () => {
    const { language, toggleLanguage } = useLanguage()

    return (
        <header className="w-full flex justify-end pr-2 absolute top-0 z-10" >
            <div className="flex gap-1 hover:cursor-pointer" onClick={toggleLanguage}>
                <img
                    src={language === "pt" ? ueaFlag : brFlag}
                    alt={language === "pt" ? "eua flag" : "br flag"}
                    className="w-5"
                />
                <p className="text-sm pb-0.5" >{language === "pt" ? "en" : "pt"}</p>

            </div>

        </header>
    )
}

export default Header