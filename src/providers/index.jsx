// Contextos
import { UserProvider } from "./UserContext/index";
import { StoresProvider } from "./StoresContext/index";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <StoresProvider>{children}</StoresProvider>
    </UserProvider>
  );
};

export default Providers;
