import DashboardHeader from "../../organisms/DashboardHeader";
import { GridContainer } from "./style";
import Sidebar from "../../molecules/SideBar";

const MenuDashboard = ({ children }) => {
  return (
    <GridContainer>
      <div className="SidebarContainer">
        <div>
          <Sidebar />
        </div>
      </div>
      <div className="HeaderContainer">
        <DashboardHeader />
      </div>
      <div className="SectionContainer">{children}</div>
    </GridContainer>
  );
};

export default MenuDashboard;
