import DashboardHeader from "../../organisms/DashboardHeader";
import { GridContainer } from "./style";
import Sidebar from "../../molecules/SideBar";
import Picture from "../../atoms/Picture";
import footerPicture from "../../../assets/images/footerPicture.png";

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
      {/* <Picture
				image={footerPicture}
				width={["320px", "444px"]}
				height={["155px", "215px"]}
				position={["relative", "absolute"]}
				top={["0px", "calc(100% - 215px)"]}
				left={["-37px"]}
			/> */}
    </GridContainer>
  );
};

export default MenuDashboard;
