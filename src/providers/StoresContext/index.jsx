import { createContext, useContext, useState, useEffect } from "react";

import API from "../../services/api";
import { getStores } from "../../helper/stores";

const StoresContext = createContext();

// Contexto das Lojas, estados globais devem ser feitos aqui.
export const StoresProvider = ({ children }) => {
  const [listStores, setListStores] = useState([]);

  const getAllStores = async () => {
    try {
      const response = await API.get(getStores(), {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      setListStores([...response.data]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {}, [listStores]);

  return (
    <StoresContext.Provider value={{ getAllStores, listStores, setListStores }}>
      {children}
    </StoresContext.Provider>
  );
};

//Hook Personalizado
export const useStores = () => useContext(StoresContext);
