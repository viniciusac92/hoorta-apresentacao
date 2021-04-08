import { createContext, useContext } from "react";

const UserContext = createContext();

// Contexto do Usuário, estados globais devem ser feitos aqui.
export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

//Hook Personalizado
export const useData = () => useContext(UserContext);
