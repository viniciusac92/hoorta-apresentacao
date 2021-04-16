import { createContext, useContext, useState } from "react";

const UserContext = createContext();

// Contexto do Usuário, estados globais devem ser feitos aqui.
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const checkOwner = (store) => {
    return userData.storeId === parseInt(store);
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, checkOwner }}>
      {children}
    </UserContext.Provider>
  );
};

//Hook Personalizado
export const useData = () => useContext(UserContext);
