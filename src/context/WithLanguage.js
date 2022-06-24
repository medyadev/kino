
import {useState} from "react";
import {LanguageContext} from "./languageContext";

const  WithLanguage = ({ children }) =>  {
    const [language, setLanguage] = useState("ru-RU");
    return <LanguageContext.Provider value={{ language, setLanguage }}>
        { children }
    </LanguageContext.Provider>;
}


export default WithLanguage