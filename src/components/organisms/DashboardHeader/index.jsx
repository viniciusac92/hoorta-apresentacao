import HeaderDashboard from "../../molecules/HeaderDashboard";
import Search from "../../molecules/search";
import { HeaderContainer } from "./styles";

const DashboardHeader = () => {
  return (
    <HeaderContainer>
      <HeaderDashboard />
      <Search />
    </HeaderContainer>
  );
};

export default DashboardHeader;
