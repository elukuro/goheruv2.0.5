import React, { createContext, useState } from "react";

type activeNavType = {
  activeNav: string;
  setActiveNav: React.Dispatch<React.SetStateAction<string>>;
};

export const NavContext = createContext({} as activeNavType);

type NavContextProdivderType = {
  children: React.ReactNode;
};

export const NavContextProvider = ({ children }: NavContextProdivderType) => {
  const [activeNav, setActiveNav] = useState("");
  return <NavContext.Provider value={{ activeNav, setActiveNav }}>{children}</NavContext.Provider>;
};
