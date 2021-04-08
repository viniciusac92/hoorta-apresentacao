// Contextos
import { UserProvider } from "./UserContext/index";

const Providers = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Providers;
