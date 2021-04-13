// Contextos
import {UserProvider} from "./UserContext/index";
import {StoresProvider} from "./StoresContext/index";
import {ProductsProvider} from "./ProductsContext/index";

const Providers = ({children}) => {
	return (
		<UserProvider>
			<StoresProvider>
				<ProductsProvider>{children}</ProductsProvider>
			</StoresProvider>
		</UserProvider>
	);
};

export default Providers;
