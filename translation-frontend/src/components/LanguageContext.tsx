import React, { createContext, useContext, useState } from "react";
import { translation } from "./translation";

type Lang = "en" | "fr" | "id";

const LanguageContext = createContext<any>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("en");

  const t = translation[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);