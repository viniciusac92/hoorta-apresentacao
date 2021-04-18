import HeaderDashboard from "../../molecules/HeaderDashboard";
import Search from "../../molecules/Search";
import { HeaderContainer } from "./styles";
import { useHistory } from "react-router";

const DashboardHeader = () => {
  const history = useHistory();
  const location = history.location.pathname;

  const show = () => {
    if (location === "/dashboard" || location.indexOf("store") > -1) {
      return true;
    } else {
      return false;
    }
  };

  console.log(location);
  return (
    <HeaderContainer>
      <HeaderDashboard />
      {show() && <Search />}
    </HeaderContainer>
  );
};

export default DashboardHeader;
