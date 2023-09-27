import { createContext, useContext, useState } from "react";
import ptText from "./languages/pt.json"; 
import enText from "./languages/en.json"; 

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt"); 

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  const getText = () => {
    return language === "en" ? enText : ptText;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, getText }}>
      {children}
    </LanguageContext.Provider>
  );
};
