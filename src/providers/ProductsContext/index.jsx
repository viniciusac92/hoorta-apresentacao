import {createContext, useContext, useState} from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
	const [productsData, setProductsData] = useState(null);
	return (
		<ProductsContext.Provider value={{productsData, setProductsData}}>
			{children}
		</ProductsContext.Provider>
	);
};

export const useProductData = () => useContext(ProductsContext);
